import {Article } from './article';
import { from } from 'rxjs';
export const ARTICLES: Article [] = [
{
    id: 1,
    title: 'My first Article',
    content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi placeat iste cupiditate tenetur porro explicabo ducimus sapiente sed incidunt, fugit laborum eius soluta natus delectus illum voluptatibus reprehenderit veniam sit reiciendis. Qui nisi molestiae omnis aliquid, sunt officiis. Accusantium, provident optio quo aspernatur dolorum nostrum perspiciatis error magnam aut ipsum velit pariatur impedit. Unde ducimus repellat quidem illo ratione, ab sunt consectetur fuga, aperiam architecto at recusandae debitis sit. Quos quo iste adipisci ipsa modi? Placeat similique id qui vitae provident cupiditate impedit consequuntur deleniti dignissimos velit cumque, nulla aspernatur alias recusandae! Molestias quia saepe vel impedit nam nemo.</p>',
    description: 'this is my first article its great .Please read it.',
    key: 'my-first-article',
    date: new Date(),
    imgUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
},
{
    id: 2,
    title: 'My second Article',
    content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi placeat iste cupiditate tenetur porro explicabo ducimus sapiente sed incidunt, fugit laborum eius soluta natus delectus illum voluptatibus reprehenderit veniam sit reiciendis. Qui nisi molestiae omnis aliquid, sunt officiis. Accusantium, provident optio quo aspernatur dolorum nostrum perspiciatis error magnam aut ipsum velit pariatur impedit. Unde ducimus repellat quidem illo ratione, ab sunt consectetur fuga, aperiam architecto at recusandae debitis sit. Quos quo iste adipisci ipsa modi? Placeat similique id qui vitae provident cupiditate impedit consequuntur deleniti dignissimos velit cumque, nulla aspernatur alias recusandae! Molestias quia saepe vel impedit nam nemo.</p>',
    description: 'also  a great article its great .Please read it.',
    key: 'my-second-article',
    date: new Date(),
    imgUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
}
];