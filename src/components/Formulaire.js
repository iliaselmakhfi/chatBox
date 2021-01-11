import React , {Component} from 'react'

class Formulaire extends Component{

    state = {
        message: '',
        length : ''
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo: pseudo,
            message: this.state.message
        }
        addMessage(message)
        
        //Reset
        this.setState({ message: '',length:length})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        const length =  this.props.length - message.length
        this.setState({message,length})
    }

    handleKeyUp = event => {
        //console.log(event.key)
        if(event.key === 'Enter'){
            this.createMessage()
         }
    }

    render(){
        return(
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea 
                    required 
                    maxLength={this.props.length}  
                    onChange={this.handleChange} 
                    onKeyUp={this.handleKeyUp} 
                    value={this.state.message}/>
                <div className='info'>
                    {this.state.length}
                </div>
                <button type='submit'>
                    Envoyer!
                </button>
            </form>
        )
    }
}

export default Formulaire