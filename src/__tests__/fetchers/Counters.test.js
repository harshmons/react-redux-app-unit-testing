import fetchStoredCounters from "../../fetchers/Counters";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("Fetchers",()=>{
    
    test("fetchStoredCounters return expected result",()=>{
        
        const mockedResponse = {
            "storedValues":[2,3,18]
        }
        
        mock
        .onGet("/storedCounters.json")
        .reply(200,mockedResponse)
        
        fetchStoredCounters()
        .then((response)=>{
            expect(response).toEqual(mockedResponse.storedValues);
        })
    })
})