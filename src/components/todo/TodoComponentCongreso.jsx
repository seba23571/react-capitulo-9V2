import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponentCongreso extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            idCodigoDeBarra: this.props.match.params.id,
            username: '',
            nombreDelProducto: '',
            iva: '',
            precioUnitario: '',
            precioUnitarioMasIva: '',
            remarcacion: '',
            remarcacionResultado: '',
            remarcacionResultadoFinal: '',
            proveedoresNombres: '',
            marcasDeProductos: '',
            fechadeingreso: moment(new Date()).format('YYYY-MM-DD'),
          //  actualdate: moment(new Date()).format('YYYY-MM-DD'),
            cantidadDeProductos: '',
            cantidadLimite: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName()

        TodoDataService.retrieveTodoCongreso(username, this.state.id)
            .then(response => this.setState({
                idCodigoDeBarra: response.data.idCodigoDeBarra,
                username: response.data.username,
                nombreDelProducto: response.data.nombreDelProducto,
                iva: response.data.iva,
                precioUnitario: response.data.precioUnitario,
                precioUnitarioMasIva: response.data.precioUnitarioMasIva,
                remarcacion: response.data.remarcacion,
                remarcacionResultado: response.data.remarcacionResultado,
                remarcacionResultadoFinal: response.data.remarcacionResultadoFinal,
                proveedoresNombres: response.data.proveedoresNombres,
                marcasDeProductos: response.data.marcasDeProductos,
                fechadeingreso: moment(response.data.fechadeingreso).format('YYYY-MM-DD'),


             //   var varDate = "2018-01-19 18:05:01.423";
//  var myDate =  moment(varDate,"YYYY-MM-DD").format("DD-MM-YYYY");
               //   moment.unix(value).format("MM/DD/YYYY");
                cantidadDeProductos: response.data.cantidadDeProductos,
                cantidadLimite: response.data.cantidadDeProductos
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.idCodigoDeBarra) {
            errors.idCodigoDeBarra = 'Enter a Description'
        } else if (values.description.length < 1) {
            errors.idCodigoDeBarra = 'Enter atleast 5 Characters in Description'
        }

        if (!moment(values.fechadeingreso).isValid()) {
            errors.fechadeingreso = 'Enter a valid Target Date'
        }

        return errors

    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()

        let todo = {
            idCodigoDeBarra: values.idCodigoDeBarra,
            username : values.username,
            nombreDelProducto: values.nombreDelProducto,
            iva : values.iva,
            precioUnitario : values.precioUnitario,
            precioUnitarioMasIva : values.precioUnitarioMasIva, 
            remarcacion : values.remarcacion,
            remarcacionResultado : values.remarcacionResultado,
            remarcacionResultadoFinal : values.remarcacionResultadoFinal,
            proveedoresNombres : values.proveedoresNombres,
            marcasDeProductos : values.marcasDeProductos,
            fechadeingreso : values.fechadeingreso,
            cantidadDeProductos : values.cantidadDeProductos,
            cantidadLimite : values.cantidadLimite

        }

        if (this.state.id === -1) {
            TodoDataService.createTodoCongreso(username, todo)
                .then(() => this.props.history.push('/supraweb'))
        } else {
            TodoDataService.updateTodoCongreso(username, this.state.id, todo)
                .then(() => this.props.history.push('/supraweb'))
        }

        console.log(values);
    }

    render() {

        let { idCodigoDeBarra,  username,  nombreDelProducto,  iva,  precioUnitario, precioUnitarioMasIva,  remarcacion, 
            remarcacionResultado,  remarcacionResultadoFinal, 
             proveedoresNombres,  marcasDeProductos,  fechadeingres ,cantidadDeProductos,cantidadLimite} = this.state

        return (
            <div>
                <h1>Productos</h1>
                <div className="container">
                    {/* nombreDelProducto : '',
            proveedoresNombres : '' */}
                    <Formik
                        initialValues={{  idCodigoDeBarra,  username,  nombreDelProducto,  iva,  precioUnitario, 
                            precioUnitarioMasIva,  remarcacion, 
                            remarcacionResultado,  remarcacionResultadoFinal,  proveedoresNombres,  marcasDeProductos,
                              fechadeingres,cantidadDeProductos,cantidadLimite}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    // id: this.props.match.params.id,
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="idCodigoDeBarra" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="username" component="div" className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Codigo de barra</label>
                                        <Field className="form-control" type="text" name="idCodigoDeBarra" />
                                    </fieldset>
                                    
                                     <fieldset className="form-group">
                                        <label>username</label>
                                        <Field className="form-control" type="text" name="username" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>nombreDelProducto</label>
                                        <Field className="form-control" type="text" name="nombreDelProducto" />
                                    </fieldset>   
                                    
                                    <fieldset className="form-group">
                                        <label>iva</label>
                                        <Field className="form-control" type="text" name="iva" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>precioUnitario</label>
                                        <Field className="form-control" type="text" name="precioUnitario" />
                                    </fieldset>
                                    
                                    <fieldset className="form-group">
                                        <label>precioUnitarioMasIva</label>
                                        <Field className="form-control" type="text" name="precioUnitarioMasIva" />
                                    </fieldset>
                                    
                                    <fieldset className="form-group">
                                        <label>remarcacion</label>
                                        <Field className="form-control" type="text" name="remarcacion" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>remarcacionResultado</label>
                                        <Field className="form-control" type="text" name="remarcacionResultado" />
                                    </fieldset>                                    
                                     <fieldset className="form-group">
                                        <label>remarcacionResultadoFinal</label>
                                        <Field className="form-control" type="text" name="remarcacionResultadoFinal" />
                                    </fieldset>                                   
                                    <fieldset className="form-group">
                                        <label>proveedoresNombres </label>
                                        <Field className="form-control" type="text" name="proveedoresNombres" />
                                    </fieldset>                              
                                    
                                    <fieldset className="form-group">
                                        <label>marcasDeProductos </label>
                                        <Field className="form-control" type="text" name="marcasDeProductos" />
                                    </fieldset>    
                                    <fieldset className="form-group">
                                        <label>fecha ingreso</label>
                                        <Field className="form-control" type="date" name="fechadeingreso" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>cantidadDeProductos</label>
                                        <Field className="form-control" type="text" name="cantidadDeProductos" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>cantidadLimite</label>
                                        <Field className="form-control" type="text" name="cantidadLimite" />
                                    </fieldset>




                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default TodoComponentCongreso 