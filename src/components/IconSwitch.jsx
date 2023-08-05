export const IconSwitch = (props) => {
  // Название иконки соответствует названию класса из библиотеки material icons.
  const { icon, onSwitch } = props;

  return (
    <>
      <span onClick={onSwitch} className="material-icons">{icon}</span>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    </>
  )
}
