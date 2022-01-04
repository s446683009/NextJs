
import {Skeleton} from '@mui/material'
import styled from './header.module.css'

export default function Index(props) {


    return (
      <div className={styled.header}>
        <div className={styled.headerWrap}>
          <div>
            <Skeleton variant='rectangular' width={100} height={45}></Skeleton>
          </div>
          < div >
            <Skeleton variant='rectangular' width={100} height={45}></Skeleton>
          </div>
          <div>
            <Skeleton variant='rectangular' width={100} height={45}></Skeleton>
          </div>
          <div>
            <Skeleton variant='rectangular' width={100} height={45}></Skeleton>
          </div>
          <div>
            <Skeleton variant='rectangular' width={100} height={45}></Skeleton>
          </div>
          <div>
            <Skeleton variant='rectangular' width={100} height={45}></Skeleton>
          </div>
        </div>
        <div className={styled.headerWrap}>
          <div>
            <Skeleton variant="circular" width={36} height={36}></Skeleton>
          </div>
          <div>
          <Skeleton variant="circular" width={36} height={36}></Skeleton>
          </div>
          <div>
          <Skeleton variant="circular" width={36} height={36}></Skeleton>
          </div>
          <div>
          <Skeleton variant="circular" width={36} height={36}></Skeleton>
          </div>
          <div>
            <Skeleton variant='rectangular' width={80} height={36}></Skeleton>
          </div>
        </div>
      </div>
       
    )
}
