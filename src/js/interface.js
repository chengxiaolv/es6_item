import https from '../utils/axios';

// 特别注意一点，在类中 不要用 ， 分割。
class Interface {
    /**
     * 获取遗漏数据
     * @param {string} issue 
     */
    getOmit(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            https.get("/get/omit")
                .then((res) => {
                    self.setOmit(res);
                    resolve.call(self, res);
                })
                .catch((err) => {
                    reject.call(err);
                })
        })
    }

    /**
     * 获得开奖号码
     * @param {string} issue 
     */
    getOpenCode(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            https.get("/get/opencode")
                .then((res) => {
                    self.setOpenCode(res)
                    resolve.call(self, res)
                })
                .catch((err) => {
                    reject.call(err)
                })
        })
    }

    /**
     * 获取当前状态
     * @param {string} issue 
     */
    getState(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            https.get("/get/state")
                .then((res) => {
                    self.setState(res)
                    resolve.call(self, res)
                })
                .catch((err) => {
                    reject.call(err)
                })
        })
    }
}

export default Interface;