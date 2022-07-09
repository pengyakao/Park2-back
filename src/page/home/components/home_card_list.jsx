import ActCard from "./home_act_card"
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import './UploadCard.css'



const CardList = ({ listData, listData2 }) => {

    const addAct = () => {
        window.location.href = `/home/act_new`;
    }
    
    return <div style={{ "display": "flex", "flex-wrap": "wrap" }}>
        <Card sx={{
            minWidth: 247, minHeight: 218, border: '0px solid #F4F4F4',
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            "margin": "15px"
        }} onClick={addAct}>
            <Button id="uploadIcon" sx={{ minWidth: 247, minHeight: 218 }}>
                <AddCircleOutlineIcon sx={{ color: "gray", fontSize: "70px" }} />
            </Button>
        </Card>
        {
            listData.map((item) => {
                console.log(item)
                const { act_id, home_act_id, home_act_sta, home_act_title,act_Sdate, act_Edate,act_Stime,act_Etime,act_img,act_sta} = item
                return (
                    <ActCard
                        key={home_act_id}
                        id={home_act_id}
                        name={home_act_title}
                        img={act_img}
                        hidden={home_act_sta}
                        sdate={act_Sdate}
                        edate={act_Edate}
                        stime={act_Stime}
                        etime={act_Etime}
                        act_sta={act_sta}
                        act_id={act_id}

                    />
                );
            })
        }
    </div>
}


export default CardList