import { Injectable } from '@nestjs/common';

@Injectable()
export class TestGetService {

    getUserTest() : string[] {
       return ['string1', 'string2']
    }

}
