class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        // for(let i=0;i<heights.length;i++){
        //     for(let j=i+1;j<heights.length;j++){
        //         const minH = Math.min(heights[i],heights[j])
        //         const width = Math.abs(i-j)
        //         const area = minH*width;
        //         maxArea = Math.max(area,maxArea)
        //     }
        // }

        let l = 0;
        let r = heights.length-1;
        while(l<r){
            const minH = Math.min(heights[l],heights[r])
            const width = Math.abs(l-r)
            const area = minH*width
            maxArea = Math.max(area,maxArea)

            if(heights[l] < heights[r]){
                l++
            }else r--
        }
        return maxArea
    }
}
