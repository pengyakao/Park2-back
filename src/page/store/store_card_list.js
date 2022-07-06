import StoreCard from './store_card'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import '../../components/Ellie/UploadCard'

const CardList = ({ listData }) => {
    const addStore = () => {
        window.location.href = `/store/store_new`
    }

    console.log('listData', listData)

    return (
        <div style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
            {listData.map((item) => {
                console.log(item)
                const { id, name, img, hidden } = item
                return <StoreCard key={id} id={id} name={name} img={img} hidden={hidden} />
            })}
        </div>
    )
}

export default CardList
