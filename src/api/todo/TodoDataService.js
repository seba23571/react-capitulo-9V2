import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class TodoDataService {

    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
    }

    retrieveAllTodosCongreso(name) {
        //console.log('executed service')
       // return axios.get(`${JPA_API_URL}/users/${name}/todos`);

        return axios.get(`http://localhost:8080/jpa/congreso/users/${name}/todos`);
    }

    retrieveTodo(name, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }
    retrieveTodoCongreso(name, id) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/jpa/congreso/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    deleteTodoCongreso(name, idCodigoDeBarra) {
        //console.log('executed service')
        return axios.delete(`http://localhost:8080/jpa/congreso/users/${name}/todos/${idCodigoDeBarra}`);
       // return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }
    updateTodoCongreso(name, id, todo) {
        //console.log('executed service')
       // return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
            //http://localhost:8080/jpa/congreso/users/supraweb/todos/whiskas
            return axios.put(`http://localhost:8080/jpa/congreso/users/${name}/todos/${id}`, todo);

//http://localhost:8080/jpa/congreso/users/supraweb/todos/whiskas
    }


    updateTodoCongreso(name, id, todo) {
        console.log('updateTodoCongreso todo ',todo)//'http://localhost:8080/jpa'
        //http://localhost:8080/jpa/congreso/users/supraweb/todos/whiskas
        return axios.put(`${JPA_API_URL}/congreso/users/${name}/todos/${id}`, todo);
    }
    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }  
    
    
    createTodoCongreso(name, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/congreso/users/${name}/todos/`, todo);
       // @PostMapping("/jpa/congreso/users/{username}/todos")

    }

}

export default new TodoDataService()