import returnIfTheFormIsCompleted from './returnIfTheFormIscCompleted'

function goNextScreen(){
    return returnIfTheFormIsCompleted().ReturnIfOptionWasSelected() && returnIfTheFormIsCompleted().ReturnIfInputFileWasFilled() ? "Second": "First"
}

export default goNextScreen