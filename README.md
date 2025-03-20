# Lab Escape calculator

With this website, you can calculate the fastest possible time to complete a Lab Escape tube by inputting the amount of blocks in a tube.

## How it's calculated

With iron tools, breaking blocks take:
- 0.5s for wood
- 0.4s for stone
- 0.15s for dirt

There is an extra 6-tick delay (0.3s) between each block break, so 20.7s are added to that (69*0.3, because with 70 blocks, there will be 69 delays).

The end result will display two different times:
- The fastest time you could get on Hypixel (adds another 0.7s, which is the time between breaking the last block and receiving the finish message)
- The fastest time you could get using the Party Games Top Scores rules, where the time is stopped as soon as the last block is broken.

Extra time taken to fall due to ping is negated by the extra time you get to pre-break the first block, so ping is negated in the calculations.

## What's next

I plan to add a luck calculator to the site, where you can input a time, to get a rough estimate of the amount of runs that are faster or slower.
