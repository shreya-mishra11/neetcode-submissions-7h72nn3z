class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        for(let i=0;i<heights.length;i++){
            for(let j=i+1;j<heights.length;j++){
                const minH = Math.min(heights[i],heights[j])
                const width = Math.abs(i-j)
                const area = minH*width;
                maxArea = Math.max(area,maxArea)
            }
        }
        return maxArea
    }
}
