function stateFeedback(){
    return {
        SetFeedback(feedback){
            localStorage.setItem("feedback", feedback);
        },
        GetFeedback(){
            return localStorage.getItem("feedback");
        }
    }
}

export default stateFeedback;