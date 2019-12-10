import Dexie from 'dexie';


export const loadState = async () => {
    try {
        const db = new Dexie('moltoDB');
        // This schema's version should not be upgraded.
        db.version(1).stores({
            appstate:'reducer,value'
        });
        const appstate = await db.appstate.toArray();
        // if store contains reducer keys:
        if(0 < appstate.length) {
            let storedState = {};
            for(let index in appstate) {
                storedState[appstate[index].reducer] = appstate[index].value;
            }
            return storedState;
        }
    } catch (e) {
        console.log(e)
    }
    // No stored state:
    return undefined;
};

export const saveState = async (key,value) =>{
    try {
        const db = new Dexie('machineryDB');
        // This schema's version should not be upgraded.
        db.version(1).stores({
            appstate:'reducer,value'
        });
        // Updates if key exists, inserts otherwise.
        db.appstate.put({reducer:key,value});
    }
    catch(err) {
        return false;
    }
};

export const deleteState = async (key) =>{
    try {
        const db = new Dexie('machineryDB');
        // This schema's version should not be upgraded.
        db.version(1).stores({
            appstate:'reducer,value'
        });
        let result = await db.appstate.where('reducer').equals(key).delete();
        return result;
    }
    catch(e) {
        console.log(e)
        return false;
    }
};