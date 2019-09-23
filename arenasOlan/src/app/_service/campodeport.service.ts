import { Campodeport} from './../_model/campodeport';
import { Injectable } from '@angular/core';


@Injectable()
export class CampodeportService {

    campodeport: Campodeport[] = [
        new Campodeport(1, 'Hamburguesa', 'https://cdn3.cnet.com/img/zti-8maGznHRwm0Q6af0m7InwzM=/fit-in/970x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg', 10),
        new Campodeport(2, 'Jugo de Naranja', 'http://cfxtras.com/wp-content/uploads/2016/04/el-jugo-de-naranja-ayuda-para-la-acidez.jpg', 5)
    ];

    constructor() { }

    getCampodeport() {
        return this.campodeport;
    }
}