export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const fetchData = (delay, data) => (dispatch, getState) => {
  const time = Date.now() // get current timestamp

  // send current timestamp to redux store
  dispatch({
    type: FETCH_DATA_REQUEST,
    time,
  })

  // simulate the response delay from the server
  setTimeout(() => {
    const { lastReqTime } = getState().lastReq

    if (time === lastReqTime) { // check if time is lastReqTime
      dispatch({
        type: FETCH_DATA_SUCCESS,
        data: data,
      })
    }
  }, delay)
}
