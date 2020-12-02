import { helper } from '@ember/component/helper';

function eq([userid, adminid]) {
    //console.log(nums);
    return userid === adminid;
}

export default helper(eq);