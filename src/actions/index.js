export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const fetchData = (delay, data) => (dispatch, getState) => {
  const lastReqId = getState().lastReq.lastReqId + 1

  dispatch({
    type: FETCH_DATA_REQUEST,
    lastReqId,
  })

  setTimeout(() => {
    if (lastReqId === getState().lastReq.lastReqId) {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        data: data,
      })
    }
  }, delay)
}
