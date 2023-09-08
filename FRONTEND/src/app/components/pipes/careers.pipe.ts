import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'careers'
})
export class CareersPipe implements PipeTransform {

  transform(value: string): string {
    // Remove spaces, commas, and double quotes
    return value.replace(/,/g, '').replace(/"/g, '');
  }

}


// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'profile'
// })
// export class ProfilePipe implements PipeTransform {

//   transform(value: string): string {
//     if (!value) {
//       return '';
//     }
//     return value.charAt(0).toUpperCase();
//   }

// }