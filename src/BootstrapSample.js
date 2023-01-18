import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let SamplebootstrapExample=()=>
{
    const connection=()=>
    {
        alert("apple is mostly recomanded for all people")
    }
    return(
        <>
        <button className='btn btn-outline-success text-dark' onClick={connection}>Apple<i class="bi bi-apple"></i></button>
        </>
    );
}