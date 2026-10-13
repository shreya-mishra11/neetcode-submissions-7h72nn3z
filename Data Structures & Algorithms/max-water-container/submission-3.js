class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        // for(let i=0;i<heights.length;i++){
        //     for(let j=i+1;j<heights.length;j++){
        //         let height = Math.min(heights[i],heights[j])
        //         let width = j-i;

        //         let area = height*width;

        //          maxArea= Math.max(maxArea,area)
        //     }
        // }

        let l = 0;
        let r = heights.length-1;

        while(l<r){
            let minH = Math.min(heights[l],heights[r])
            let width = Math.abs(l-r)

            let area = minH *width;

            maxArea = Math.max(maxArea,area)

            if(heights[l] < heights[r]) l++;
            else r--;
        }
        return maxArea
    }
}
