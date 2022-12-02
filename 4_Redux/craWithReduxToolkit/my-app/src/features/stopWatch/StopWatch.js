import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { increment, start, stop, addToList } from "./stopWatchSlice";

const StopWatch = () => {
    const watcherValue = useSelector(state => state.stopWatch.value);
    const isCounting = useSelector(state => state.stopWatch.isCounting);
    const list = useSelector(state => state.stopWatch.list);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isCounting) {
            const intervalID = setInterval(() => {
                dispatch(increment())
            }, 1000)
            return () => {
                clearInterval(intervalID);
            };
        }
    }, [isCounting]);

    return (
        <div>
            <div>
                <div>
                    <button onClick={() => dispatch(start())}>start</button>
                    <button onClick={() => dispatch(stop())}>stop</button>
                    <h1>{watcherValue}</h1>
                </div>
                <div>
                    <button onClick={() => dispatch(addToList())}>zapisz</button>
                    <ul>
                        {
                            list.map((el, i) => <li key={i}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;
