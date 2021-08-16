import Header from './Greeting'

const Button = (props) => {
    return (
        <button> {props.text} {props.title.map(person => <Header title={ person } />)}</button>
    )
}

export default Button
