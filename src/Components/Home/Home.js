import { Grid } from '@mui/material'
// import { useHistory } from 'react-router';
import CardCustom from '../Card/Card'
import Carousel from '../Carousel/Carousel';
import developers from '../FakeData/Devloper'



export default function Home() {

    // const [developersNow, setDevelopersNow] = useState([]);
    // useEffect(() => {
    //     setDevelopersNow(developers)
    //     // console.log(developers)

    // }, [])
    // let history =useHistory();
    // const handleClick = (e) => {
    //     history.push('/about')
    // }
    return (
        <div>
            <Carousel />
            {/* <button onClick={handleClick}>sakil</button> */}
            <Grid container
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}


                style={{ marginTop: 20 }}
            >
                {developers.map(db =>

                    <CardCustom developers={db} key={db.id} ></CardCustom>


                )}
            </Grid>
        </div>
    )
}
