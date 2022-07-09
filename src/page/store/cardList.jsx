import StoreCard from './store_card'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'


const CardList = ({ listData }) => {
    const addStore = () => {
        window.location.href = `/store/store_new`
    }

    console.log('listData', listData)

    return (
        <div style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
            {listData.map((item) => {
                console.log(item)
                const { sto_name,sto_id, sto_class, sto_img, sto_tel, sto_location,
                    sto_pay1, sto_pay2, sto_pay3, sto_pay4, sto_pay5, sto_pay6, sto_pay7,
                    sto_mon, sto_tue, sto_wed, sto_thu, sto_fri, sto_sat, sto_sun,
                    sto_fb, sto_ins, sto_line, sto_info, sto_sta, sto_main, sto_first_img} = item
                return <StoreCard
                    key = {sto_id}
                    name = {sto_name}
                    type = { sto_class }
                    img = { sto_img }
                    tel = { sto_tel }
                    location = { sto_location }
                    pay1 = { sto_pay1 }
                    pay2 = { sto_pay2 }
                    pay3 = { sto_pay3 }
                    pay4 = { sto_pay4 }
                    pay5 = { sto_pay5 }
                    pay6 = { sto_pay6 }
                    pay7 = { sto_pay7 }
                    mon = { sto_mon }
                    tue = { sto_tue }
                    wed = { sto_wed }
                    thu = { sto_thu }
                    fri = { sto_fri }
                    sat = { sto_sat }
                    sun = { sto_sun }
                    fb = { sto_fb }
                    ig = { sto_ins }
                    line = { sto_line }
                    info = { sto_info }
                    state = { sto_sta }
                    isMain = { sto_main }
                    firstImg = { sto_first_img }
                    id = { sto_id }
                    />
            })}
        </div>
    )
}

export default CardList
