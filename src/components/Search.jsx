import { wait } from "@testing-library/user-event/dist/utils"
import axios from "axios"
import React from "react"



const Search = () => {
    const [search, setsearch] = React.useState('')
    const [result, setresult] = React.useState()


    const searchbook = async (name) => {
        try {
            const api = await axios.get(`http://openlibrary.org/search.json?q=${name}`, {
            })
            setresult(api.data.docs)
        } catch (error) {
            console.error(error.message);

        }
    }

    React.useEffect(() => {
        if (search !== '')
            searchbook(search)
    }, [search])
    console.log(result);
    return (
        <React.Fragment>
            <input type="search" placeholder="Search" value={search} onChange={(e) => setsearch(e.target.value)} autoFocus={true} />
            <h1>Search Result</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pub. Year</th>
                    </tr>
                </thead>
            </table>

        </React.Fragment>
    )
}


export default Search