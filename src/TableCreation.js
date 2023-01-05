import './Mycss.css'
export let TableFrom=()=>
{
    const sample={borderColor:'red'}
    return(
        <>
        <table style={sample}>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Thivinkanth</td>
                    <td>BCA</td>
                </tr>
                <tr>
                    <td>Pradeep</td>
                    <td>BE</td>
                </tr>
                <tr>
                    <td>Thilak</td>
                    <td>BCA</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}