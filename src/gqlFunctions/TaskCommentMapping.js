import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export const createMapping = async (mapDetails) => {
    try {
        const addMap= await API.graphql({ query: mutations.createTaskCommentMapping, variables: { input: mapDetails } })
        console.log("Added comment is : ", addMap);
    } catch (error) {
        console.log("error in creating ", error);
        throw new Error(error)

    }
}