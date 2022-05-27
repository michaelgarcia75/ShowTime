import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegistrationReqModel } from 'src/models/registration.req.model';
import { RegistrationRespModel } from 'src/models/registration.resp.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOneAuth(email);
        console.log(user);
        console.log("in validateUser");
        let test = await bcrypt.compare(password, user.password);
        if (user && test) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user._doc.username, email: user._doc.email, sub: user._doc._id };
        return {
            access_token: this.jwtService.sign(payload),
            userId: user._doc._id,
            is_admin: user._doc.is_admin,
        }
    }

    async registrationValidation(regModel: RegistrationReqModel): Promise<string> {
        if (!regModel.email) {
            return "Email can't be empty";
        }

        const emailRule =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRule.test(regModel.email.toLowerCase())) {
            return 'Invalid email';
        }

        const user = await this.usersService.findOneAuth(regModel.email);
        if (user != null && user.email) {
            return 'Username already exist';
        }

        if (regModel.password !== regModel.confirmPassword) {
            return 'Confirm password does not match';
        }
        return '';
    }

    private async getPasswordHash(password: string): Promise<string> {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }

    public async registerUser(
        regModel: RegistrationReqModel,
    ): Promise<RegistrationRespModel> {
        let result = new RegistrationRespModel();

        const errorMessage = await this.registrationValidation(regModel);
        if (errorMessage) {
            result.successStatus = false;
            result.message = errorMessage;

            return result;
        }

        let hash = await this.getPasswordHash(regModel.password);
        let newUser = { username: regModel.username, email: regModel.email, password: hash, is_admin: false };

        let createUser = await this.usersService.create(newUser);

        if (createUser) {
            result.successStatus = true;
            result.message = 'success';
        } else {
            result.successStatus = false;
            result.message = 'There has been an error';
        }
        return result;
    }

}
