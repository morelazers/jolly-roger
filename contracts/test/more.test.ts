import {expect} from './chai-setup';
import {getUnnamedAccounts} from '@nomiclabs/buidler';
import {test} from '{{=_.paramCase(it.name)}}-common';

describe('CommonLib', function () {
  it('test common lib', async function () {
    const others = await getUnnamedAccounts();
    const n = test(others[1], 'hello');
    expect(n).to.be.gt(0);
  });
});
