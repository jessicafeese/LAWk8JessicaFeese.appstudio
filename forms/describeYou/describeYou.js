
rdoDescribe.onchange=function(){
   let userChoice = $("input[name=rdoDescribe]:checked").prop("value")
   lblDescribe.value = (`I would agree that you are a ${userChoice} person too!`)
}

btnNext2.onclick=function(){
  ChangeForm(favExercises)
}
