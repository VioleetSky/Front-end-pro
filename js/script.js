"use strict";

function fetchUserData(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId %2!==0){
                resolve({id: userId});
            }
            else{
                reject({error: `User ID does not exist ${userId}`});
            }
        },1000)
    })
}

async function getUsersData(userIds){
    const userPromises= userIds.map(id=>fetchUserData(id));
    const resultPromises=await Promise.allSettled(userPromises);
            const successResult=resultPromises.filter(
                result=> result.status === "fulfilled"
            )
            const errorResult=resultPromises.filter(
                result=> result.status === "rejected"
            )
            const successData=successResult.map(
                result=> result.value
            );
            const errorData=errorResult.map(
                result=> result.reason
            )
            return {success:successData,errors:errorData};
        }


const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then((result) => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});