import AuthStore from "./Auth/AuthStore";
import QuizStore from "./Quiz/QuizStore";

class RootStore {
    constructor() {
        this.auth = new AuthStore(this)
        this.quiz = new QuizStore(this)
    }
}

export default new RootStore();