let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()
  for (i = 0; i < exercises.length; i++)
    selExercises.addItem(exercises[i])
  for (i = 0; i < coreExercises.length; i++)
    selExercises.addItem(coreExercises[i])
}





btnSubmit.onclick=function(){
  let message = "Your favorite exercises are: "
  for (i = 0; i < selExercises.text.length; i++)
     message = message + selExercises.text[i] + ", "
  message = message.slice(0, -2)
  lblBest.value = (message)
}


btnNext3.onclick=function(){
  ChangeForm(mobileNav)
}
