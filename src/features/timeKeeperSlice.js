import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    timeKeeperData: [
        {
            name: 'Create Time Keeper App',
            status: 'backlog',
            timeSpend: 0,
            type: 'project',
            startDate: null,
            endDate: null,
            note: [],
            createDate: '03/01/2022'

        },
        {
            name: 'Discus Contract',
            status: 'completed',
            timeSpend: 30,
            type: 'communication',
            startDate: '03/07/2022',
            endDate: '03/07/2022',
            note: [
                {
                    id: '03072022153004',
                    text: 'talk with Kris about contracting opportunity.', 
                    createDate: '03/07/2022',
                    createBy: 'Vinh Pham'
                }
            ],
            createDate: '03/05/2022'

        },
        {
            name: 'Signed Contract and Return',
            status: 'completed',
            timeSpend: 10,
            type: 'communication',
            startDate: '03/12/2022',
            endDate: '03/12/2022',
            note: [
                {
                    id: '03122022113004',
                    text: 'signed and return contract to Kris', 
                    createDate: '03/12/2022',
                    createBy: 'Vinh Pham'
                }
            ],
            createDate: '03/11/2022'

        },
        {
            name: 'Call Kris and Aaron to Discus Work',
            status: 'inprocess',
            timeSpend: 0,
            type: 'communication',
            startDate: '03/14/2022',
            endDate: null,
            note: [],
            createDate: '03/01/2022'

        }
    ]
}

export const timeKeeperSlice = createSlice({
    
    name: 'timeKeeper',
    initialState,
    reducers: {

    }
})

export default timeKeeperSlice.reducer