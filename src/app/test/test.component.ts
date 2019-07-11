import { Component } from '@angular/core';
import { TESTS } from '../mock/test-mock';
import { Test } from './test_template'

@Component({
  selector: 'test-menu',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  test: Test = {
      id: 0,
      name: 'OTU'
};

  tests = TESTS;
}
