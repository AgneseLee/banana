import Vue from 'vue';

function validator(target, validator, errorMsg) {
    return new Proxy(target, {
        _validator: validator,
        _err: errorMsg,
        set(target, key, value) {
            let errMsg = errorMsg
            if (value === '') {
                alert(`${errMsg[key]}且不能为空！`)
                return target[key] = undefined;
            }
            let va = this._validator[key]
            if (!!va(value)) {
                return Reflect.set(target, key, value)
            } else {
                alert(`${errMsg[key]}`)
                return target[key] = undefined;
            }
        }
    })
}

const rules = {
    name(value) {
        return value.length < 6
    },
    passwd(value) {
        return value.length > 6
    },
    moblie(value) {
        return /^1(3|5|7|8|9)[0-9]{9}$/.test(value)
    },
    email(value) {
        return /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
    }
}
const errorMsg = {
    name: '用户名必须少于8个字',
    passwd: '密码',
    moblie: '手机号码',
    email: '邮箱地址'
}

const sixValid = validator({}, rules, errorMsg)
export {
    sixValid
};