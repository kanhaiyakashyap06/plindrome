import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  palidromString: any = 'forgeeksskeegfor'
  output: any = []
  test: any = ""
  test2: any = []
  constructor() {
  }

  ngOnInit(): void {
    this.longestPalidrome(this.palidromString)
    this.longestPalstr(this.palidromString)
  }


  longestPalstr(str: any) {
    let n = str.length;
    if (n < 2)
      return n;
    // forgeeksskeegfor
    let maxLength = 1, start = 0;
    let low, high;
    for (let i = 0; i < n; i++) {
      low = i - 1;
      high = i + 1;
      while (high < n && str[high] == str[i]) { high++; }

      while (low >= 0 && str[low] == str[i]) { low--; }

      while (low >= 0 && high < n && str[low] == str[high]) {
        low--;
        high++;
      }
      let length = high - low - 1;
      if (maxLength < length) {
        maxLength = length;
        start = low + 1;
      }
    }
    this.output = str.substring(start, maxLength + start)
    return maxLength;
  }
  longestPalidrome(str: any) {
    let n = str.length
    let a = str.split("").reverse().join("")
    let b: string
    for (let i = 0; i < n; i++) {
      if (str[i] === a[i]) {
        this.test = this.test.concat(str[i])
      } else {
        this.test2.push(this.test)
        this.test = ""
      }
    }
    if (this.test2.length) {
      this.test2.sort((x1: any, x2: any) => x2.length - x1.length)
    }
  }
}
