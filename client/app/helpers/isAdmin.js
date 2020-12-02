import { helper } from '@ember/component/helper';

function isAdmin([userid]) {
    console.log(userid);
    return userid;
}

export default helper(isAdmin);