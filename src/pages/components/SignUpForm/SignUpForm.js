import { Component } from "react";
import { signUp } from '../../../utilities/users-service'
import './SignUpForm.css'

export default class SignUpForm extends Component {
    // state is just a POJO
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (event) => {
        this.setState({
            // name, email, password, confirm
            [event.target.name]: event.target.value,
            error: ''
        })
        // this.setState(prevState => {
        //     return { bool: !prevState.bool }
        // })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // alert(JSON.stringify(this.state))
        // try something if it works GREAT
        try {
            // taking the state and making a copy of the state and assigning it to formData var
            const formData = { ...this.state }
            delete formData.error
            delete formData.confirm
            console.log(formData)

            // wait for a response back from the server
            const user = await signUp(formData)
            // now logging the token
            this.props.setUser(user)

        } catch (error) {
            console.error(error)
            // if it doesn't error handle
            this.setState({
                error: 'Sign up failed  - Try again later'
            })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm
        return (
            <div className='d-flex justify-content-center col' >
                <div className='signup-form form-container' id="bgc">
                    <form autoComplete='off' onSubmit={this.handleSubmit}>
                        <div className="form-floating">
                            <input
                                className='form-control'
                                type='text'
                                name='name'
                                placeholder='name'
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                            <label className='form-label'>Name</label>
                        </div>
                        <div className="form-floating" > 
                            <input
                                className='form-control'
                                type='email'
                                name='email'
                                placeholder='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                            <label className='form-label'>Email</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className='form-control'
                                type='password'
                                name='password'
                                placeholder='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                            <label className='form-label'>Password</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className='form-control'
                                type='password'
                                name='confirm'
                                placeholder='confirm'
                                value={this.state.confirm}
                                onChange={this.handleChange}
                                required
                            />
                            <label className='form-label'>Confirm</label>
                        </div>
                        <button className="btn btn-success mx-3 my-2" type='submit' disabled={disable} id='buttonCtrl'>Sign Up</button>
                    </form>
                    <p className='error-message' >{this.state.error}</p>
                </div>
            </div>
        )
    }
}