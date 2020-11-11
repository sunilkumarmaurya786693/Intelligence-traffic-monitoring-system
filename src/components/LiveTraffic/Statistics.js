import React from 'react';

export default class Statistics extends React.Component {
  render() {
    return (
      <div style={{width: '100%', height: '100%', 'overflow-y': 'scroll'}}>
        <iframe src={'/stats.html'} style={styles.map} />
        <br/> 
        <br/> 
        <br/> 
        <table className="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Time</th>
<th title="Field #2">Lane-1</th>
<th title="Field #3">Lane-2</th>
<th title="Field #4">Lane-3</th>
<th title="Field #5">Lane-4</th>
<th title="Field #6">TotalCars</th>
<th title="Field #7">TotalTime</th>
</tr></thead>
<tbody><tr>
<td>Saturday, 1 August, 2020 00:00</td>
<td>8</td>
<td>1</td>
<td>6</td>
<td>7</td>
<td>22</td>
<td>85</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 01:00</td>
<td>1</td>
<td>1</td>
<td>3</td>
<td>8</td>
<td>13</td>
<td>47</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 02:00</td>
<td>8</td>
<td>5</td>
<td>4</td>
<td>5</td>
<td>22</td>
<td>61</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 03:00</td>
<td>7</td>
<td>2</td>
<td>1</td>
<td>5</td>
<td>15</td>
<td>58</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 04:00</td>
<td>7</td>
<td>0</td>
<td>4</td>
<td>4</td>
<td>15</td>
<td>57</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 05:00</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>0</td>
<td>18</td>
<td>67</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 06:00</td>
<td>6</td>
<td>7</td>
<td>1</td>
<td>1</td>
<td>15</td>
<td>56</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 07:00</td>
<td>0</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>6</td>
<td>17</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 08:00</td>
<td>18</td>
<td>26</td>
<td>34</td>
<td>24</td>
<td>102</td>
<td>202</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 09:00</td>
<td>28</td>
<td>16</td>
<td>14</td>
<td>21</td>
<td>79</td>
<td>315</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 10:00</td>
<td>19</td>
<td>35</td>
<td>22</td>
<td>20</td>
<td>96</td>
<td>188</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 11:00</td>
<td>26</td>
<td>15</td>
<td>26</td>
<td>19</td>
<td>86</td>
<td>253</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 12:00</td>
<td>16</td>
<td>35</td>
<td>22</td>
<td>17</td>
<td>90</td>
<td>356</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 13:00</td>
<td>32</td>
<td>12</td>
<td>19</td>
<td>16</td>
<td>79</td>
<td>232</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 14:00</td>
<td>18</td>
<td>21</td>
<td>13</td>
<td>25</td>
<td>77</td>
<td>304</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 15:00</td>
<td>28</td>
<td>32</td>
<td>21</td>
<td>23</td>
<td>104</td>
<td>204</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 16:00</td>
<td>34</td>
<td>30</td>
<td>15</td>
<td>21</td>
<td>100</td>
<td>198</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 17:00</td>
<td>25</td>
<td>16</td>
<td>36</td>
<td>25</td>
<td>102</td>
<td>201</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 18:00</td>
<td>19</td>
<td>17</td>
<td>38</td>
<td>17</td>
<td>91</td>
<td>270</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 19:00</td>
<td>21</td>
<td>27</td>
<td>29</td>
<td>25</td>
<td>102</td>
<td>404</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 20:00</td>
<td>33</td>
<td>28</td>
<td>18</td>
<td>16</td>
<td>95</td>
<td>282</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 21:00</td>
<td>25</td>
<td>14</td>
<td>35</td>
<td>17</td>
<td>91</td>
<td>360</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 22:00</td>
<td>17</td>
<td>31</td>
<td>20</td>
<td>17</td>
<td>85</td>
<td>253</td>
</tr>
<tr>
<td>Saturday, 1 August, 2020 23:00</td>
<td>18</td>
<td>17</td>
<td>12</td>
<td>21</td>
<td>68</td>
<td>269</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 00:00</td>
<td>3</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>17</td>
<td>64</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 01:00</td>
<td>2</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>3</td>
<td>7</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 02:00</td>
<td>7</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>25</td>
<td>47</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 03:00</td>
<td>6</td>
<td>5</td>
<td>7</td>
<td>1</td>
<td>19</td>
<td>35</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 04:00</td>
<td>2</td>
<td>3</td>
<td>8</td>
<td>4</td>
<td>17</td>
<td>46</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 05:00</td>
<td>3</td>
<td>6</td>
<td>5</td>
<td>7</td>
<td>21</td>
<td>62</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 06:00</td>
<td>6</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>12</td>
<td>43</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 07:00</td>
<td>5</td>
<td>3</td>
<td>0</td>
<td>7</td>
<td>15</td>
<td>57</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 08:00</td>
<td>30</td>
<td>20</td>
<td>15</td>
<td>16</td>
<td>81</td>
<td>160</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 09:00</td>
<td>25</td>
<td>34</td>
<td>37</td>
<td>20</td>
<td>116</td>
<td>343</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 10:00</td>
<td>22</td>
<td>33</td>
<td>35</td>
<td>18</td>
<td>108</td>
<td>429</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 11:00</td>
<td>17</td>
<td>32</td>
<td>14</td>
<td>21</td>
<td>84</td>
<td>334</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 12:00</td>
<td>34</td>
<td>14</td>
<td>36</td>
<td>18</td>
<td>102</td>
<td>301</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 13:00</td>
<td>28</td>
<td>14</td>
<td>13</td>
<td>19</td>
<td>74</td>
<td>145</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 14:00</td>
<td>31</td>
<td>12</td>
<td>38</td>
<td>20</td>
<td>101</td>
<td>299</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 15:00</td>
<td>25</td>
<td>25</td>
<td>19</td>
<td>17</td>
<td>86</td>
<td>254</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 16:00</td>
<td>15</td>
<td>12</td>
<td>14</td>
<td>22</td>
<td>63</td>
<td>122</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 17:00</td>
<td>18</td>
<td>24</td>
<td>34</td>
<td>25</td>
<td>101</td>
<td>200</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 18:00</td>
<td>24</td>
<td>28</td>
<td>37</td>
<td>16</td>
<td>105</td>
<td>418</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 19:00</td>
<td>30</td>
<td>35</td>
<td>39</td>
<td>22</td>
<td>126</td>
<td>499</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 20:00</td>
<td>15</td>
<td>33</td>
<td>15</td>
<td>16</td>
<td>79</td>
<td>233</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 21:00</td>
<td>34</td>
<td>29</td>
<td>40</td>
<td>19</td>
<td>122</td>
<td>483</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 22:00</td>
<td>30</td>
<td>22</td>
<td>29</td>
<td>24</td>
<td>105</td>
<td>209</td>
</tr>
<tr>
<td>Sunday, 2 August, 2020 23:00</td>
<td>35</td>
<td>26</td>
<td>33</td>
<td>18</td>
<td>112</td>
<td>445</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 00:00</td>
<td>4</td>
<td>5</td>
<td>1</td>
<td>0</td>
<td>10</td>
<td>19</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 01:00</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>0</td>
<td>13</td>
<td>47</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 02:00</td>
<td>6</td>
<td>6</td>
<td>8</td>
<td>6</td>
<td>26</td>
<td>74</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 03:00</td>
<td>1</td>
<td>0</td>
<td>5</td>
<td>1</td>
<td>7</td>
<td>13</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 04:00</td>
<td>3</td>
<td>6</td>
<td>5</td>
<td>7</td>
<td>21</td>
<td>39</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 05:00</td>
<td>2</td>
<td>3</td>
<td>5</td>
<td>5</td>
<td>15</td>
<td>57</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 06:00</td>
<td>6</td>
<td>1</td>
<td>4</td>
<td>5</td>
<td>16</td>
<td>27</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 07:00</td>
<td>3</td>
<td>6</td>
<td>5</td>
<td>7</td>
<td>21</td>
<td>81</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 08:00</td>
<td>26</td>
<td>18</td>
<td>24</td>
<td>24</td>
<td>92</td>
<td>272</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 09:00</td>
<td>32</td>
<td>15</td>
<td>21</td>
<td>17</td>
<td>85</td>
<td>168</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 10:00</td>
<td>35</td>
<td>20</td>
<td>35</td>
<td>18</td>
<td>108</td>
<td>212</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 11:00</td>
<td>21</td>
<td>21</td>
<td>20</td>
<td>23</td>
<td>85</td>
<td>167</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 12:00</td>
<td>16</td>
<td>28</td>
<td>25</td>
<td>21</td>
<td>90</td>
<td>356</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 13:00</td>
<td>21</td>
<td>18</td>
<td>33</td>
<td>23</td>
<td>95</td>
<td>283</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 14:00</td>
<td>25</td>
<td>26</td>
<td>26</td>
<td>19</td>
<td>96</td>
<td>287</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 15:00</td>
<td>27</td>
<td>31</td>
<td>31</td>
<td>19</td>
<td>108</td>
<td>215</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 16:00</td>
<td>29</td>
<td>10</td>
<td>18</td>
<td>18</td>
<td>75</td>
<td>296</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 17:00</td>
<td>22</td>
<td>21</td>
<td>24</td>
<td>18</td>
<td>85</td>
<td>168</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 18:00</td>
<td>22</td>
<td>15</td>
<td>28</td>
<td>17</td>
<td>82</td>
<td>162</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 19:00</td>
<td>27</td>
<td>26</td>
<td>25</td>
<td>18</td>
<td>96</td>
<td>190</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 20:00</td>
<td>25</td>
<td>24</td>
<td>24</td>
<td>21</td>
<td>94</td>
<td>186</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 21:00</td>
<td>25</td>
<td>17</td>
<td>15</td>
<td>16</td>
<td>73</td>
<td>218</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 22:00</td>
<td>15</td>
<td>27</td>
<td>22</td>
<td>16</td>
<td>80</td>
<td>238</td>
</tr>
<tr>
<td>Monday, 3 August, 2020 23:00</td>
<td>17</td>
<td>20</td>
<td>37</td>
<td>17</td>
<td>91</td>
<td>269</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 00:00</td>
<td>2</td>
<td>6</td>
<td>0</td>
<td>0</td>
<td>8</td>
<td>22</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 01:00</td>
<td>5</td>
<td>8</td>
<td>2</td>
<td>0</td>
<td>15</td>
<td>41</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 02:00</td>
<td>7</td>
<td>4</td>
<td>5</td>
<td>5</td>
<td>21</td>
<td>58</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 03:00</td>
<td>6</td>
<td>7</td>
<td>0</td>
<td>3</td>
<td>16</td>
<td>43</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 04:00</td>
<td>2</td>
<td>8</td>
<td>4</td>
<td>7</td>
<td>21</td>
<td>79</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 05:00</td>
<td>6</td>
<td>7</td>
<td>7</td>
<td>2</td>
<td>22</td>
<td>61</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 06:00</td>
<td>0</td>
<td>5</td>
<td>4</td>
<td>6</td>
<td>15</td>
<td>41</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 07:00</td>
<td>7</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>21</td>
<td>80</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 08:00</td>
<td>19</td>
<td>22</td>
<td>10</td>
<td>22</td>
<td>73</td>
<td>143</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 09:00</td>
<td>18</td>
<td>23</td>
<td>25</td>
<td>18</td>
<td>84</td>
<td>166</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 10:00</td>
<td>32</td>
<td>10</td>
<td>12</td>
<td>18</td>
<td>72</td>
<td>214</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 11:00</td>
<td>33</td>
<td>14</td>
<td>36</td>
<td>20</td>
<td>103</td>
<td>408</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 12:00</td>
<td>32</td>
<td>14</td>
<td>18</td>
<td>19</td>
<td>83</td>
<td>164</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 13:00</td>
<td>16</td>
<td>23</td>
<td>18</td>
<td>24</td>
<td>81</td>
<td>239</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 14:00</td>
<td>21</td>
<td>32</td>
<td>10</td>
<td>20</td>
<td>83</td>
<td>329</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 15:00</td>
<td>30</td>
<td>24</td>
<td>23</td>
<td>25</td>
<td>102</td>
<td>203</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 16:00</td>
<td>34</td>
<td>30</td>
<td>23</td>
<td>19</td>
<td>106</td>
<td>422</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 17:00</td>
<td>28</td>
<td>28</td>
<td>26</td>
<td>25</td>
<td>107</td>
<td>424</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 18:00</td>
<td>23</td>
<td>19</td>
<td>10</td>
<td>21</td>
<td>73</td>
<td>288</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 19:00</td>
<td>26</td>
<td>29</td>
<td>31</td>
<td>24</td>
<td>110</td>
<td>328</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 20:00</td>
<td>25</td>
<td>29</td>
<td>36</td>
<td>24</td>
<td>114</td>
<td>225</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 21:00</td>
<td>34</td>
<td>29</td>
<td>26</td>
<td>20</td>
<td>109</td>
<td>217</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 22:00</td>
<td>15</td>
<td>28</td>
<td>22</td>
<td>22</td>
<td>87</td>
<td>170</td>
</tr>
<tr>
<td>Tuesday, 4 August, 2020 23:00</td>
<td>27</td>
<td>20</td>
<td>18</td>
<td>20</td>
<td>85</td>
<td>336</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 00:00</td>
<td>7</td>
<td>2</td>
<td>5</td>
<td>1</td>
<td>15</td>
<td>59</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 01:00</td>
<td>0</td>
<td>5</td>
<td>8</td>
<td>1</td>
<td>14</td>
<td>23</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 02:00</td>
<td>3</td>
<td>7</td>
<td>5</td>
<td>7</td>
<td>22</td>
<td>43</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 03:00</td>
<td>4</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>20</td>
<td>36</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 04:00</td>
<td>3</td>
<td>0</td>
<td>1</td>
<td>8</td>
<td>12</td>
<td>47</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 05:00</td>
<td>3</td>
<td>7</td>
<td>1</td>
<td>2</td>
<td>13</td>
<td>21</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 06:00</td>
<td>1</td>
<td>8</td>
<td>8</td>
<td>7</td>
<td>24</td>
<td>71</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 07:00</td>
<td>6</td>
<td>1</td>
<td>1</td>
<td>7</td>
<td>15</td>
<td>59</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 08:00</td>
<td>32</td>
<td>34</td>
<td>22</td>
<td>20</td>
<td>108</td>
<td>323</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 09:00</td>
<td>30</td>
<td>12</td>
<td>10</td>
<td>22</td>
<td>74</td>
<td>217</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 10:00</td>
<td>27</td>
<td>16</td>
<td>27</td>
<td>18</td>
<td>88</td>
<td>350</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 11:00</td>
<td>21</td>
<td>24</td>
<td>18</td>
<td>21</td>
<td>84</td>
<td>331</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 12:00</td>
<td>27</td>
<td>21</td>
<td>28</td>
<td>17</td>
<td>93</td>
<td>182</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 13:00</td>
<td>26</td>
<td>25</td>
<td>27</td>
<td>22</td>
<td>100</td>
<td>397</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 14:00</td>
<td>15</td>
<td>29</td>
<td>14</td>
<td>16</td>
<td>74</td>
<td>219</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 15:00</td>
<td>26</td>
<td>14</td>
<td>19</td>
<td>21</td>
<td>80</td>
<td>156</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 16:00</td>
<td>35</td>
<td>27</td>
<td>31</td>
<td>25</td>
<td>118</td>
<td>233</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 17:00</td>
<td>29</td>
<td>15</td>
<td>16</td>
<td>17</td>
<td>77</td>
<td>229</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 18:00</td>
<td>32</td>
<td>22</td>
<td>40</td>
<td>18</td>
<td>112</td>
<td>332</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 19:00</td>
<td>19</td>
<td>35</td>
<td>40</td>
<td>21</td>
<td>115</td>
<td>341</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 20:00</td>
<td>26</td>
<td>12</td>
<td>23</td>
<td>18</td>
<td>79</td>
<td>234</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 21:00</td>
<td>21</td>
<td>33</td>
<td>20</td>
<td>21</td>
<td>95</td>
<td>284</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 22:00</td>
<td>35</td>
<td>34</td>
<td>27</td>
<td>23</td>
<td>119</td>
<td>471</td>
</tr>
<tr>
<td>Wednesday, 5 August, 2020 23:00</td>
<td>16</td>
<td>23</td>
<td>40</td>
<td>22</td>
<td>101</td>
<td>401</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 00:00</td>
<td>5</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>10</td>
<td>36</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 01:00</td>
<td>3</td>
<td>5</td>
<td>1</td>
<td>8</td>
<td>17</td>
<td>66</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 02:00</td>
<td>6</td>
<td>8</td>
<td>1</td>
<td>1</td>
<td>16</td>
<td>47</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 03:00</td>
<td>7</td>
<td>7</td>
<td>8</td>
<td>6</td>
<td>28</td>
<td>52</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 04:00</td>
<td>3</td>
<td>1</td>
<td>0</td>
<td>4</td>
<td>8</td>
<td>28</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 05:00</td>
<td>5</td>
<td>0</td>
<td>0</td>
<td>6</td>
<td>11</td>
<td>20</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 06:00</td>
<td>5</td>
<td>7</td>
<td>0</td>
<td>8</td>
<td>20</td>
<td>78</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 07:00</td>
<td>1</td>
<td>3</td>
<td>8</td>
<td>4</td>
<td>16</td>
<td>44</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 08:00</td>
<td>15</td>
<td>20</td>
<td>35</td>
<td>21</td>
<td>91</td>
<td>359</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 09:00</td>
<td>27</td>
<td>32</td>
<td>24</td>
<td>25</td>
<td>108</td>
<td>214</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 10:00</td>
<td>21</td>
<td>15</td>
<td>35</td>
<td>20</td>
<td>91</td>
<td>177</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 11:00</td>
<td>33</td>
<td>14</td>
<td>38</td>
<td>23</td>
<td>108</td>
<td>323</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 12:00</td>
<td>24</td>
<td>17</td>
<td>39</td>
<td>23</td>
<td>103</td>
<td>409</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 13:00</td>
<td>32</td>
<td>20</td>
<td>11</td>
<td>20</td>
<td>83</td>
<td>161</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 14:00</td>
<td>17</td>
<td>32</td>
<td>22</td>
<td>20</td>
<td>91</td>
<td>360</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 15:00</td>
<td>25</td>
<td>35</td>
<td>30</td>
<td>17</td>
<td>107</td>
<td>318</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 16:00</td>
<td>18</td>
<td>15</td>
<td>21</td>
<td>19</td>
<td>73</td>
<td>216</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 17:00</td>
<td>24</td>
<td>11</td>
<td>20</td>
<td>16</td>
<td>71</td>
<td>208</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 18:00</td>
<td>19</td>
<td>23</td>
<td>25</td>
<td>23</td>
<td>90</td>
<td>178</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 19:00</td>
<td>35</td>
<td>23</td>
<td>29</td>
<td>16</td>
<td>103</td>
<td>408</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 20:00</td>
<td>18</td>
<td>16</td>
<td>23</td>
<td>20</td>
<td>77</td>
<td>307</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 21:00</td>
<td>27</td>
<td>24</td>
<td>27</td>
<td>25</td>
<td>103</td>
<td>205</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 22:00</td>
<td>28</td>
<td>28</td>
<td>16</td>
<td>21</td>
<td>93</td>
<td>183</td>
</tr>
<tr>
<td>Thursday, 6 August, 2020 23:00</td>
<td>25</td>
<td>35</td>
<td>16</td>
<td>25</td>
<td>101</td>
<td>399</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 00:00</td>
<td>7</td>
<td>8</td>
<td>8</td>
<td>8</td>
<td>31</td>
<td>57</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 01:00</td>
<td>1</td>
<td>7</td>
<td>7</td>
<td>5</td>
<td>20</td>
<td>37</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 02:00</td>
<td>4</td>
<td>6</td>
<td>3</td>
<td>6</td>
<td>19</td>
<td>33</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 03:00</td>
<td>7</td>
<td>2</td>
<td>8</td>
<td>3</td>
<td>20</td>
<td>75</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 04:00</td>
<td>8</td>
<td>0</td>
<td>1</td>
<td>6</td>
<td>15</td>
<td>25</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 05:00</td>
<td>1</td>
<td>8</td>
<td>6</td>
<td>5</td>
<td>20</td>
<td>55</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 06:00</td>
<td>5</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>13</td>
<td>36</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 07:00</td>
<td>6</td>
<td>4</td>
<td>6</td>
<td>7</td>
<td>23</td>
<td>41</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 08:00</td>
<td>21</td>
<td>34</td>
<td>39</td>
<td>23</td>
<td>117</td>
<td>347</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 09:00</td>
<td>28</td>
<td>24</td>
<td>26</td>
<td>18</td>
<td>96</td>
<td>283</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 10:00</td>
<td>31</td>
<td>23</td>
<td>24</td>
<td>24</td>
<td>102</td>
<td>305</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 11:00</td>
<td>33</td>
<td>17</td>
<td>11</td>
<td>17</td>
<td>78</td>
<td>153</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 12:00</td>
<td>15</td>
<td>20</td>
<td>18</td>
<td>21</td>
<td>74</td>
<td>294</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 13:00</td>
<td>34</td>
<td>34</td>
<td>28</td>
<td>17</td>
<td>113</td>
<td>448</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 14:00</td>
<td>29</td>
<td>11</td>
<td>34</td>
<td>21</td>
<td>95</td>
<td>283</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 15:00</td>
<td>23</td>
<td>34</td>
<td>20</td>
<td>24</td>
<td>101</td>
<td>402</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 16:00</td>
<td>32</td>
<td>20</td>
<td>37</td>
<td>18</td>
<td>107</td>
<td>424</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 17:00</td>
<td>24</td>
<td>15</td>
<td>39</td>
<td>18</td>
<td>96</td>
<td>382</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 18:00</td>
<td>15</td>
<td>34</td>
<td>14</td>
<td>23</td>
<td>86</td>
<td>253</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 19:00</td>
<td>18</td>
<td>26</td>
<td>16</td>
<td>17</td>
<td>77</td>
<td>229</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 20:00</td>
<td>24</td>
<td>10</td>
<td>23</td>
<td>25</td>
<td>82</td>
<td>163</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 21:00</td>
<td>18</td>
<td>24</td>
<td>16</td>
<td>22</td>
<td>80</td>
<td>319</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 22:00</td>
<td>23</td>
<td>16</td>
<td>13</td>
<td>16</td>
<td>68</td>
<td>131</td>
</tr>
<tr>
<td>Friday, 7 August, 2020 23:00</td>
<td>31</td>
<td>20</td>
<td>21</td>
<td>19</td>
<td>91</td>
<td>363</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 00:00</td>
<td>7</td>
<td>0</td>
<td>3</td>
<td>0</td>
<td>10</td>
<td>16</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 01:00</td>
<td>0</td>
<td>1</td>
<td>3</td>
<td>7</td>
<td>11</td>
<td>19</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 02:00</td>
<td>5</td>
<td>5</td>
<td>0</td>
<td>2</td>
<td>12</td>
<td>45</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 03:00</td>
<td>7</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>17</td>
<td>33</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 04:00</td>
<td>8</td>
<td>2</td>
<td>5</td>
<td>6</td>
<td>21</td>
<td>83</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 05:00</td>
<td>8</td>
<td>6</td>
<td>5</td>
<td>1</td>
<td>20</td>
<td>35</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 06:00</td>
<td>3</td>
<td>8</td>
<td>2</td>
<td>7</td>
<td>20</td>
<td>39</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 07:00</td>
<td>7</td>
<td>7</td>
<td>7</td>
<td>6</td>
<td>27</td>
<td>53</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 08:00</td>
<td>22</td>
<td>33</td>
<td>19</td>
<td>16</td>
<td>90</td>
<td>355</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 09:00</td>
<td>26</td>
<td>24</td>
<td>34</td>
<td>24</td>
<td>108</td>
<td>430</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 10:00</td>
<td>17</td>
<td>28</td>
<td>35</td>
<td>25</td>
<td>105</td>
<td>205</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 11:00</td>
<td>19</td>
<td>23</td>
<td>31</td>
<td>24</td>
<td>97</td>
<td>384</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 12:00</td>
<td>33</td>
<td>19</td>
<td>19</td>
<td>25</td>
<td>96</td>
<td>285</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 13:00</td>
<td>23</td>
<td>11</td>
<td>27</td>
<td>19</td>
<td>80</td>
<td>237</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 14:00</td>
<td>27</td>
<td>25</td>
<td>16</td>
<td>25</td>
<td>93</td>
<td>368</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 15:00</td>
<td>30</td>
<td>30</td>
<td>31</td>
<td>16</td>
<td>107</td>
<td>210</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 16:00</td>
<td>25</td>
<td>14</td>
<td>22</td>
<td>25</td>
<td>86</td>
<td>168</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 17:00</td>
<td>22</td>
<td>14</td>
<td>14</td>
<td>21</td>
<td>71</td>
<td>141</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 18:00</td>
<td>20</td>
<td>19</td>
<td>12</td>
<td>23</td>
<td>74</td>
<td>293</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 19:00</td>
<td>33</td>
<td>11</td>
<td>18</td>
<td>22</td>
<td>84</td>
<td>250</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 20:00</td>
<td>27</td>
<td>13</td>
<td>12</td>
<td>17</td>
<td>69</td>
<td>271</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 21:00</td>
<td>33</td>
<td>21</td>
<td>30</td>
<td>19</td>
<td>103</td>
<td>407</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 22:00</td>
<td>20</td>
<td>18</td>
<td>36</td>
<td>21</td>
<td>95</td>
<td>378</td>
</tr>
<tr>
<td>Saturday, 8 August, 2020 23:00</td>
<td>21</td>
<td>30</td>
<td>11</td>
<td>22</td>
<td>84</td>
<td>335</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 00:00</td>
<td>8</td>
<td>4</td>
<td>3</td>
<td>4</td>
<td>19</td>
<td>53</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 01:00</td>
<td>0</td>
<td>1</td>
<td>4</td>
<td>8</td>
<td>13</td>
<td>47</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 02:00</td>
<td>0</td>
<td>4</td>
<td>0</td>
<td>7</td>
<td>11</td>
<td>32</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 03:00</td>
<td>6</td>
<td>2</td>
<td>6</td>
<td>5</td>
<td>19</td>
<td>56</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 04:00</td>
<td>4</td>
<td>8</td>
<td>8</td>
<td>2</td>
<td>22</td>
<td>39</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 05:00</td>
<td>3</td>
<td>5</td>
<td>0</td>
<td>5</td>
<td>13</td>
<td>51</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 06:00</td>
<td>6</td>
<td>6</td>
<td>2</td>
<td>4</td>
<td>18</td>
<td>50</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 07:00</td>
<td>7</td>
<td>3</td>
<td>0</td>
<td>8</td>
<td>18</td>
<td>53</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 08:00</td>
<td>29</td>
<td>15</td>
<td>21</td>
<td>25</td>
<td>90</td>
<td>355</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 09:00</td>
<td>29</td>
<td>16</td>
<td>29</td>
<td>18</td>
<td>92</td>
<td>183</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 10:00</td>
<td>27</td>
<td>22</td>
<td>23</td>
<td>16</td>
<td>88</td>
<td>262</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 11:00</td>
<td>29</td>
<td>27</td>
<td>26</td>
<td>21</td>
<td>103</td>
<td>307</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 12:00</td>
<td>26</td>
<td>19</td>
<td>32</td>
<td>19</td>
<td>96</td>
<td>286</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 13:00</td>
<td>28</td>
<td>33</td>
<td>39</td>
<td>25</td>
<td>125</td>
<td>497</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 14:00</td>
<td>17</td>
<td>10</td>
<td>15</td>
<td>25</td>
<td>67</td>
<td>265</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 15:00</td>
<td>24</td>
<td>10</td>
<td>21</td>
<td>18</td>
<td>73</td>
<td>143</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 16:00</td>
<td>17</td>
<td>26</td>
<td>19</td>
<td>22</td>
<td>84</td>
<td>331</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 17:00</td>
<td>31</td>
<td>25</td>
<td>22</td>
<td>22</td>
<td>100</td>
<td>199</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 18:00</td>
<td>35</td>
<td>29</td>
<td>29</td>
<td>20</td>
<td>113</td>
<td>334</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 19:00</td>
<td>22</td>
<td>30</td>
<td>11</td>
<td>20</td>
<td>83</td>
<td>165</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 20:00</td>
<td>22</td>
<td>20</td>
<td>39</td>
<td>25</td>
<td>106</td>
<td>419</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 21:00</td>
<td>21</td>
<td>19</td>
<td>39</td>
<td>18</td>
<td>97</td>
<td>387</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 22:00</td>
<td>24</td>
<td>33</td>
<td>15</td>
<td>16</td>
<td>88</td>
<td>262</td>
</tr>
<tr>
<td>Sunday, 9 August, 2020 23:00</td>
<td>19</td>
<td>22</td>
<td>33</td>
<td>17</td>
<td>91</td>
<td>362</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 00:00</td>
<td>7</td>
<td>5</td>
<td>7</td>
<td>2</td>
<td>21</td>
<td>80</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 01:00</td>
<td>4</td>
<td>6</td>
<td>1</td>
<td>7</td>
<td>18</td>
<td>33</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 02:00</td>
<td>4</td>
<td>7</td>
<td>8</td>
<td>3</td>
<td>22</td>
<td>86</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 03:00</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>0</td>
<td>9</td>
<td>34</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 04:00</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>5</td>
<td>21</td>
<td>39</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 05:00</td>
<td>1</td>
<td>8</td>
<td>1</td>
<td>8</td>
<td>18</td>
<td>35</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 06:00</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>4</td>
<td>7</td>
<td>20</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 07:00</td>
<td>0</td>
<td>3</td>
<td>2</td>
<td>8</td>
<td>13</td>
<td>49</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 08:00</td>
<td>29</td>
<td>15</td>
<td>24</td>
<td>20</td>
<td>88</td>
<td>351</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 09:00</td>
<td>29</td>
<td>34</td>
<td>21</td>
<td>23</td>
<td>107</td>
<td>425</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 10:00</td>
<td>26</td>
<td>15</td>
<td>24</td>
<td>23</td>
<td>88</td>
<td>171</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 11:00</td>
<td>15</td>
<td>11</td>
<td>32</td>
<td>24</td>
<td>82</td>
<td>327</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 12:00</td>
<td>27</td>
<td>22</td>
<td>27</td>
<td>19</td>
<td>95</td>
<td>281</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 13:00</td>
<td>28</td>
<td>18</td>
<td>26</td>
<td>23</td>
<td>95</td>
<td>378</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 14:00</td>
<td>22</td>
<td>32</td>
<td>26</td>
<td>23</td>
<td>103</td>
<td>307</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 15:00</td>
<td>33</td>
<td>25</td>
<td>25</td>
<td>24</td>
<td>107</td>
<td>212</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 16:00</td>
<td>23</td>
<td>14</td>
<td>23</td>
<td>24</td>
<td>84</td>
<td>248</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 17:00</td>
<td>24</td>
<td>18</td>
<td>35</td>
<td>25</td>
<td>102</td>
<td>202</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 18:00</td>
<td>24</td>
<td>28</td>
<td>20</td>
<td>17</td>
<td>89</td>
<td>355</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 19:00</td>
<td>29</td>
<td>29</td>
<td>22</td>
<td>23</td>
<td>103</td>
<td>305</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 20:00</td>
<td>21</td>
<td>33</td>
<td>16</td>
<td>23</td>
<td>93</td>
<td>276</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 21:00</td>
<td>23</td>
<td>10</td>
<td>14</td>
<td>17</td>
<td>64</td>
<td>123</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 22:00</td>
<td>27</td>
<td>23</td>
<td>12</td>
<td>21</td>
<td>83</td>
<td>329</td>
</tr>
<tr>
<td>Monday, 10 August, 2020 23:00</td>
<td>20</td>
<td>10</td>
<td>32</td>
<td>25</td>
<td>87</td>
<td>260</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 00:00</td>
<td>6</td>
<td>7</td>
<td>1</td>
<td>4</td>
<td>18</td>
<td>35</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 01:00</td>
<td>8</td>
<td>7</td>
<td>6</td>
<td>5</td>
<td>26</td>
<td>48</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 02:00</td>
<td>6</td>
<td>2</td>
<td>1</td>
<td>5</td>
<td>14</td>
<td>25</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 03:00</td>
<td>7</td>
<td>8</td>
<td>0</td>
<td>1</td>
<td>16</td>
<td>63</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 04:00</td>
<td>5</td>
<td>1</td>
<td>7</td>
<td>5</td>
<td>18</td>
<td>70</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 05:00</td>
<td>3</td>
<td>0</td>
<td>7</td>
<td>5</td>
<td>15</td>
<td>27</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 06:00</td>
<td>7</td>
<td>6</td>
<td>3</td>
<td>0</td>
<td>16</td>
<td>44</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 07:00</td>
<td>6</td>
<td>7</td>
<td>4</td>
<td>7</td>
<td>24</td>
<td>47</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 08:00</td>
<td>31</td>
<td>14</td>
<td>35</td>
<td>25</td>
<td>105</td>
<td>310</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 09:00</td>
<td>15</td>
<td>22</td>
<td>33</td>
<td>21</td>
<td>91</td>
<td>181</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 10:00</td>
<td>35</td>
<td>25</td>
<td>33</td>
<td>19</td>
<td>112</td>
<td>220</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 11:00</td>
<td>18</td>
<td>21</td>
<td>26</td>
<td>18</td>
<td>83</td>
<td>244</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 12:00</td>
<td>34</td>
<td>34</td>
<td>35</td>
<td>22</td>
<td>125</td>
<td>247</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 13:00</td>
<td>25</td>
<td>25</td>
<td>10</td>
<td>18</td>
<td>78</td>
<td>307</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 14:00</td>
<td>32</td>
<td>27</td>
<td>35</td>
<td>18</td>
<td>112</td>
<td>333</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 15:00</td>
<td>15</td>
<td>29</td>
<td>25</td>
<td>23</td>
<td>92</td>
<td>366</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 16:00</td>
<td>33</td>
<td>24</td>
<td>15</td>
<td>18</td>
<td>90</td>
<td>265</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 17:00</td>
<td>33</td>
<td>19</td>
<td>19</td>
<td>25</td>
<td>96</td>
<td>187</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 18:00</td>
<td>22</td>
<td>16</td>
<td>20</td>
<td>25</td>
<td>83</td>
<td>329</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 19:00</td>
<td>34</td>
<td>20</td>
<td>18</td>
<td>19</td>
<td>91</td>
<td>269</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 20:00</td>
<td>22</td>
<td>34</td>
<td>22</td>
<td>20</td>
<td>98</td>
<td>191</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 21:00</td>
<td>15</td>
<td>19</td>
<td>18</td>
<td>20</td>
<td>72</td>
<td>141</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 22:00</td>
<td>25</td>
<td>32</td>
<td>16</td>
<td>22</td>
<td>95</td>
<td>379</td>
</tr>
<tr>
<td>Tuesday, 11 August, 2020 23:00</td>
<td>32</td>
<td>21</td>
<td>16</td>
<td>22</td>
<td>91</td>
<td>177</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 00:00</td>
<td>7</td>
<td>4</td>
<td>5</td>
<td>4</td>
<td>20</td>
<td>59</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 01:00</td>
<td>0</td>
<td>0</td>
<td>6</td>
<td>3</td>
<td>9</td>
<td>25</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 02:00</td>
<td>1</td>
<td>6</td>
<td>4</td>
<td>7</td>
<td>18</td>
<td>49</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 03:00</td>
<td>1</td>
<td>6</td>
<td>2</td>
<td>4</td>
<td>13</td>
<td>37</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 04:00</td>
<td>3</td>
<td>0</td>
<td>1</td>
<td>4</td>
<td>8</td>
<td>11</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 05:00</td>
<td>5</td>
<td>8</td>
<td>7</td>
<td>6</td>
<td>26</td>
<td>50</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 06:00</td>
<td>8</td>
<td>1</td>
<td>3</td>
<td>7</td>
<td>19</td>
<td>74</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 07:00</td>
<td>5</td>
<td>3</td>
<td>7</td>
<td>4</td>
<td>19</td>
<td>37</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 08:00</td>
<td>34</td>
<td>21</td>
<td>35</td>
<td>25</td>
<td>115</td>
<td>341</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 09:00</td>
<td>22</td>
<td>17</td>
<td>22</td>
<td>18</td>
<td>79</td>
<td>155</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 10:00</td>
<td>16</td>
<td>15</td>
<td>23</td>
<td>17</td>
<td>71</td>
<td>141</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 11:00</td>
<td>29</td>
<td>21</td>
<td>35</td>
<td>23</td>
<td>108</td>
<td>214</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 12:00</td>
<td>28</td>
<td>16</td>
<td>31</td>
<td>25</td>
<td>100</td>
<td>196</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 13:00</td>
<td>19</td>
<td>24</td>
<td>25</td>
<td>24</td>
<td>92</td>
<td>275</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 14:00</td>
<td>21</td>
<td>30</td>
<td>24</td>
<td>17</td>
<td>92</td>
<td>363</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 15:00</td>
<td>31</td>
<td>26</td>
<td>27</td>
<td>22</td>
<td>106</td>
<td>420</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 16:00</td>
<td>34</td>
<td>10</td>
<td>29</td>
<td>19</td>
<td>92</td>
<td>363</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 17:00</td>
<td>15</td>
<td>30</td>
<td>22</td>
<td>18</td>
<td>85</td>
<td>337</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 18:00</td>
<td>27</td>
<td>11</td>
<td>35</td>
<td>23</td>
<td>96</td>
<td>188</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 19:00</td>
<td>24</td>
<td>16</td>
<td>33</td>
<td>17</td>
<td>90</td>
<td>358</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 20:00</td>
<td>17</td>
<td>35</td>
<td>28</td>
<td>18</td>
<td>98</td>
<td>389</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 21:00</td>
<td>18</td>
<td>12</td>
<td>16</td>
<td>18</td>
<td>64</td>
<td>126</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 22:00</td>
<td>28</td>
<td>11</td>
<td>32</td>
<td>21</td>
<td>92</td>
<td>366</td>
</tr>
<tr>
<td>Wednesday, 12 August, 2020 23:00</td>
<td>30</td>
<td>21</td>
<td>25</td>
<td>24</td>
<td>100</td>
<td>298</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 00:00</td>
<td>4</td>
<td>0</td>
<td>0</td>
<td>6</td>
<td>10</td>
<td>37</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 01:00</td>
<td>6</td>
<td>0</td>
<td>2</td>
<td>3</td>
<td>11</td>
<td>42</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 02:00</td>
<td>1</td>
<td>0</td>
<td>6</td>
<td>3</td>
<td>10</td>
<td>25</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 03:00</td>
<td>6</td>
<td>4</td>
<td>7</td>
<td>0</td>
<td>17</td>
<td>46</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 04:00</td>
<td>4</td>
<td>3</td>
<td>5</td>
<td>0</td>
<td>12</td>
<td>46</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 05:00</td>
<td>7</td>
<td>0</td>
<td>2</td>
<td>2</td>
<td>11</td>
<td>19</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 06:00</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>1</td>
<td>19</td>
<td>74</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 07:00</td>
<td>1</td>
<td>6</td>
<td>3</td>
<td>8</td>
<td>18</td>
<td>71</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 08:00</td>
<td>23</td>
<td>28</td>
<td>17</td>
<td>24</td>
<td>92</td>
<td>274</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 09:00</td>
<td>21</td>
<td>13</td>
<td>12</td>
<td>21</td>
<td>67</td>
<td>199</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 10:00</td>
<td>33</td>
<td>17</td>
<td>24</td>
<td>20</td>
<td>94</td>
<td>185</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 11:00</td>
<td>24</td>
<td>28</td>
<td>24</td>
<td>16</td>
<td>92</td>
<td>275</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 12:00</td>
<td>20</td>
<td>30</td>
<td>32</td>
<td>19</td>
<td>101</td>
<td>300</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 13:00</td>
<td>31</td>
<td>15</td>
<td>34</td>
<td>21</td>
<td>101</td>
<td>199</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 14:00</td>
<td>30</td>
<td>17</td>
<td>33</td>
<td>25</td>
<td>105</td>
<td>314</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 15:00</td>
<td>22</td>
<td>34</td>
<td>38</td>
<td>21</td>
<td>115</td>
<td>343</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 16:00</td>
<td>28</td>
<td>31</td>
<td>27</td>
<td>16</td>
<td>102</td>
<td>200</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 17:00</td>
<td>19</td>
<td>22</td>
<td>31</td>
<td>18</td>
<td>90</td>
<td>265</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 18:00</td>
<td>24</td>
<td>25</td>
<td>27</td>
<td>20</td>
<td>96</td>
<td>189</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 19:00</td>
<td>24</td>
<td>17</td>
<td>24</td>
<td>18</td>
<td>83</td>
<td>245</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 20:00</td>
<td>28</td>
<td>21</td>
<td>38</td>
<td>19</td>
<td>106</td>
<td>316</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 21:00</td>
<td>21</td>
<td>35</td>
<td>28</td>
<td>20</td>
<td>104</td>
<td>207</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 22:00</td>
<td>18</td>
<td>24</td>
<td>13</td>
<td>24</td>
<td>79</td>
<td>232</td>
</tr>
<tr>
<td>Thursday, 13 August, 2020 23:00</td>
<td>28</td>
<td>29</td>
<td>25</td>
<td>16</td>
<td>98</td>
<td>390</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 00:00</td>
<td>6</td>
<td>3</td>
<td>4</td>
<td>3</td>
<td>16</td>
<td>46</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 01:00</td>
<td>2</td>
<td>8</td>
<td>0</td>
<td>3</td>
<td>13</td>
<td>25</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 02:00</td>
<td>2</td>
<td>3</td>
<td>0</td>
<td>7</td>
<td>12</td>
<td>35</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 03:00</td>
<td>0</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>6</td>
<td>22</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 04:00</td>
<td>5</td>
<td>0</td>
<td>0</td>
<td>8</td>
<td>13</td>
<td>22</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 05:00</td>
<td>5</td>
<td>0</td>
<td>6</td>
<td>2</td>
<td>13</td>
<td>37</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 06:00</td>
<td>7</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>21</td>
<td>38</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 07:00</td>
<td>8</td>
<td>7</td>
<td>7</td>
<td>5</td>
<td>27</td>
<td>103</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 08:00</td>
<td>18</td>
<td>15</td>
<td>17</td>
<td>19</td>
<td>69</td>
<td>135</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 09:00</td>
<td>18</td>
<td>30</td>
<td>29</td>
<td>18</td>
<td>95</td>
<td>188</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 10:00</td>
<td>34</td>
<td>20</td>
<td>34</td>
<td>16</td>
<td>104</td>
<td>311</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 11:00</td>
<td>30</td>
<td>29</td>
<td>34</td>
<td>21</td>
<td>114</td>
<td>341</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 12:00</td>
<td>26</td>
<td>26</td>
<td>24</td>
<td>16</td>
<td>92</td>
<td>271</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 13:00</td>
<td>22</td>
<td>10</td>
<td>30</td>
<td>20</td>
<td>82</td>
<td>323</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 14:00</td>
<td>17</td>
<td>23</td>
<td>16</td>
<td>24</td>
<td>80</td>
<td>155</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 15:00</td>
<td>16</td>
<td>30</td>
<td>15</td>
<td>18</td>
<td>79</td>
<td>314</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 16:00</td>
<td>22</td>
<td>17</td>
<td>35</td>
<td>21</td>
<td>95</td>
<td>281</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 17:00</td>
<td>28</td>
<td>23</td>
<td>29</td>
<td>23</td>
<td>103</td>
<td>408</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 18:00</td>
<td>23</td>
<td>28</td>
<td>35</td>
<td>16</td>
<td>102</td>
<td>404</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 19:00</td>
<td>21</td>
<td>12</td>
<td>17</td>
<td>16</td>
<td>66</td>
<td>263</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 20:00</td>
<td>31</td>
<td>20</td>
<td>36</td>
<td>25</td>
<td>112</td>
<td>444</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 21:00</td>
<td>32</td>
<td>25</td>
<td>27</td>
<td>23</td>
<td>107</td>
<td>319</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 22:00</td>
<td>35</td>
<td>18</td>
<td>32</td>
<td>23</td>
<td>108</td>
<td>211</td>
</tr>
<tr>
<td>Friday, 14 August, 2020 23:00</td>
<td>29</td>
<td>30</td>
<td>27</td>
<td>19</td>
<td>105</td>
<td>206</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 00:00</td>
<td>2</td>
<td>2</td>
<td>8</td>
<td>3</td>
<td>15</td>
<td>58</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 01:00</td>
<td>6</td>
<td>0</td>
<td>2</td>
<td>3</td>
<td>11</td>
<td>20</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 02:00</td>
<td>5</td>
<td>3</td>
<td>0</td>
<td>0</td>
<td>8</td>
<td>30</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 03:00</td>
<td>5</td>
<td>6</td>
<td>5</td>
<td>7</td>
<td>23</td>
<td>65</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 04:00</td>
<td>1</td>
<td>2</td>
<td>6</td>
<td>8</td>
<td>17</td>
<td>49</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 05:00</td>
<td>5</td>
<td>0</td>
<td>7</td>
<td>8</td>
<td>20</td>
<td>38</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 06:00</td>
<td>4</td>
<td>8</td>
<td>2</td>
<td>6</td>
<td>20</td>
<td>79</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 07:00</td>
<td>7</td>
<td>8</td>
<td>7</td>
<td>8</td>
<td>30</td>
<td>118</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 08:00</td>
<td>25</td>
<td>28</td>
<td>18</td>
<td>25</td>
<td>96</td>
<td>287</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 09:00</td>
<td>20</td>
<td>30</td>
<td>19</td>
<td>22</td>
<td>91</td>
<td>271</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 10:00</td>
<td>15</td>
<td>29</td>
<td>23</td>
<td>18</td>
<td>85</td>
<td>335</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 11:00</td>
<td>15</td>
<td>31</td>
<td>17</td>
<td>18</td>
<td>81</td>
<td>322</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 12:00</td>
<td>35</td>
<td>34</td>
<td>23</td>
<td>25</td>
<td>117</td>
<td>230</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 13:00</td>
<td>29</td>
<td>35</td>
<td>27</td>
<td>18</td>
<td>109</td>
<td>431</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 14:00</td>
<td>23</td>
<td>19</td>
<td>13</td>
<td>19</td>
<td>74</td>
<td>217</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 15:00</td>
<td>35</td>
<td>28</td>
<td>27</td>
<td>16</td>
<td>106</td>
<td>209</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 16:00</td>
<td>28</td>
<td>27</td>
<td>13</td>
<td>17</td>
<td>85</td>
<td>166</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 17:00</td>
<td>35</td>
<td>24</td>
<td>28</td>
<td>16</td>
<td>103</td>
<td>203</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 18:00</td>
<td>28</td>
<td>23</td>
<td>28</td>
<td>23</td>
<td>102</td>
<td>405</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 19:00</td>
<td>15</td>
<td>22</td>
<td>29</td>
<td>16</td>
<td>82</td>
<td>325</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 20:00</td>
<td>24</td>
<td>17</td>
<td>24</td>
<td>16</td>
<td>81</td>
<td>239</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 21:00</td>
<td>26</td>
<td>19</td>
<td>10</td>
<td>18</td>
<td>73</td>
<td>141</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 22:00</td>
<td>24</td>
<td>32</td>
<td>40</td>
<td>22</td>
<td>118</td>
<td>470</td>
</tr>
<tr>
<td>Saturday, 15 August, 2020 23:00</td>
<td>16</td>
<td>20</td>
<td>13</td>
<td>25</td>
<td>74</td>
<td>220</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 00:00</td>
<td>7</td>
<td>0</td>
<td>0</td>
<td>4</td>
<td>11</td>
<td>17</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 01:00</td>
<td>1</td>
<td>4</td>
<td>1</td>
<td>0</td>
<td>6</td>
<td>11</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 02:00</td>
<td>2</td>
<td>2</td>
<td>7</td>
<td>7</td>
<td>18</td>
<td>52</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 03:00</td>
<td>2</td>
<td>7</td>
<td>7</td>
<td>1</td>
<td>17</td>
<td>49</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 04:00</td>
<td>5</td>
<td>1</td>
<td>5</td>
<td>3</td>
<td>14</td>
<td>40</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 05:00</td>
<td>0</td>
<td>2</td>
<td>8</td>
<td>3</td>
<td>13</td>
<td>24</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 06:00</td>
<td>5</td>
<td>1</td>
<td>5</td>
<td>3</td>
<td>14</td>
<td>53</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 07:00</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>7</td>
<td>23</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 08:00</td>
<td>22</td>
<td>15</td>
<td>33</td>
<td>17</td>
<td>87</td>
<td>169</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 09:00</td>
<td>28</td>
<td>10</td>
<td>33</td>
<td>18</td>
<td>89</td>
<td>352</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 10:00</td>
<td>17</td>
<td>34</td>
<td>35</td>
<td>25</td>
<td>111</td>
<td>442</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 11:00</td>
<td>26</td>
<td>13</td>
<td>24</td>
<td>19</td>
<td>82</td>
<td>245</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 12:00</td>
<td>29</td>
<td>11</td>
<td>18</td>
<td>19</td>
<td>77</td>
<td>307</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 13:00</td>
<td>18</td>
<td>29</td>
<td>12</td>
<td>17</td>
<td>76</td>
<td>225</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 14:00</td>
<td>30</td>
<td>31</td>
<td>28</td>
<td>18</td>
<td>107</td>
<td>426</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 15:00</td>
<td>31</td>
<td>12</td>
<td>16</td>
<td>24</td>
<td>83</td>
<td>247</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 16:00</td>
<td>27</td>
<td>18</td>
<td>19</td>
<td>22</td>
<td>86</td>
<td>342</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 17:00</td>
<td>21</td>
<td>22</td>
<td>31</td>
<td>22</td>
<td>96</td>
<td>189</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 18:00</td>
<td>15</td>
<td>18</td>
<td>16</td>
<td>20</td>
<td>69</td>
<td>271</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 19:00</td>
<td>30</td>
<td>20</td>
<td>34</td>
<td>17</td>
<td>101</td>
<td>201</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 20:00</td>
<td>22</td>
<td>19</td>
<td>29</td>
<td>18</td>
<td>88</td>
<td>171</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 21:00</td>
<td>31</td>
<td>12</td>
<td>24</td>
<td>17</td>
<td>84</td>
<td>334</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 22:00</td>
<td>18</td>
<td>13</td>
<td>13</td>
<td>23</td>
<td>67</td>
<td>200</td>
</tr>
<tr>
<td>Sunday, 16 August, 2020 23:00</td>
<td>34</td>
<td>29</td>
<td>35</td>
<td>21</td>
<td>119</td>
<td>471</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 00:00</td>
<td>1</td>
<td>7</td>
<td>1</td>
<td>5</td>
<td>14</td>
<td>40</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 01:00</td>
<td>4</td>
<td>1</td>
<td>4</td>
<td>3</td>
<td>12</td>
<td>21</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 02:00</td>
<td>3</td>
<td>1</td>
<td>4</td>
<td>1</td>
<td>9</td>
<td>16</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 03:00</td>
<td>8</td>
<td>1</td>
<td>3</td>
<td>0</td>
<td>12</td>
<td>21</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 04:00</td>
<td>0</td>
<td>3</td>
<td>5</td>
<td>2</td>
<td>10</td>
<td>38</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 05:00</td>
<td>8</td>
<td>4</td>
<td>5</td>
<td>8</td>
<td>25</td>
<td>72</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 06:00</td>
<td>3</td>
<td>7</td>
<td>7</td>
<td>6</td>
<td>23</td>
<td>66</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 07:00</td>
<td>0</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>10</td>
<td>17</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 08:00</td>
<td>34</td>
<td>21</td>
<td>15</td>
<td>25</td>
<td>95</td>
<td>188</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 09:00</td>
<td>29</td>
<td>34</td>
<td>39</td>
<td>19</td>
<td>121</td>
<td>239</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 10:00</td>
<td>32</td>
<td>32</td>
<td>39</td>
<td>19</td>
<td>122</td>
<td>242</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 11:00</td>
<td>34</td>
<td>27</td>
<td>28</td>
<td>22</td>
<td>111</td>
<td>331</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 12:00</td>
<td>30</td>
<td>16</td>
<td>38</td>
<td>17</td>
<td>101</td>
<td>300</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 13:00</td>
<td>19</td>
<td>24</td>
<td>32</td>
<td>23</td>
<td>98</td>
<td>389</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 14:00</td>
<td>32</td>
<td>10</td>
<td>19</td>
<td>24</td>
<td>85</td>
<td>168</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 15:00</td>
<td>18</td>
<td>14</td>
<td>37</td>
<td>20</td>
<td>89</td>
<td>176</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 16:00</td>
<td>35</td>
<td>33</td>
<td>37</td>
<td>20</td>
<td>125</td>
<td>371</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 17:00</td>
<td>19</td>
<td>15</td>
<td>15</td>
<td>19</td>
<td>68</td>
<td>200</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 18:00</td>
<td>29</td>
<td>33</td>
<td>12</td>
<td>24</td>
<td>98</td>
<td>289</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 19:00</td>
<td>22</td>
<td>33</td>
<td>15</td>
<td>21</td>
<td>91</td>
<td>359</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 20:00</td>
<td>15</td>
<td>12</td>
<td>18</td>
<td>24</td>
<td>69</td>
<td>206</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 21:00</td>
<td>35</td>
<td>16</td>
<td>12</td>
<td>20</td>
<td>83</td>
<td>327</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 22:00</td>
<td>22</td>
<td>29</td>
<td>27</td>
<td>18</td>
<td>96</td>
<td>383</td>
</tr>
<tr>
<td>Monday, 17 August, 2020 23:00</td>
<td>29</td>
<td>31</td>
<td>15</td>
<td>24</td>
<td>99</td>
<td>394</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 00:00</td>
<td>3</td>
<td>1</td>
<td>8</td>
<td>7</td>
<td>19</td>
<td>36</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 01:00</td>
<td>5</td>
<td>3</td>
<td>1</td>
<td>3</td>
<td>12</td>
<td>19</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 02:00</td>
<td>3</td>
<td>0</td>
<td>4</td>
<td>8</td>
<td>15</td>
<td>25</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 03:00</td>
<td>8</td>
<td>2</td>
<td>6</td>
<td>8</td>
<td>24</td>
<td>71</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 04:00</td>
<td>6</td>
<td>7</td>
<td>7</td>
<td>6</td>
<td>26</td>
<td>76</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 05:00</td>
<td>5</td>
<td>7</td>
<td>5</td>
<td>1</td>
<td>18</td>
<td>52</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 06:00</td>
<td>1</td>
<td>8</td>
<td>8</td>
<td>3</td>
<td>20</td>
<td>38</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 07:00</td>
<td>6</td>
<td>0</td>
<td>4</td>
<td>8</td>
<td>18</td>
<td>49</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 08:00</td>
<td>26</td>
<td>19</td>
<td>38</td>
<td>18</td>
<td>101</td>
<td>200</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 09:00</td>
<td>20</td>
<td>31</td>
<td>27</td>
<td>17</td>
<td>95</td>
<td>185</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 10:00</td>
<td>23</td>
<td>32</td>
<td>26</td>
<td>17</td>
<td>98</td>
<td>388</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 11:00</td>
<td>20</td>
<td>22</td>
<td>12</td>
<td>16</td>
<td>70</td>
<td>208</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 12:00</td>
<td>16</td>
<td>30</td>
<td>32</td>
<td>20</td>
<td>98</td>
<td>195</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 13:00</td>
<td>26</td>
<td>11</td>
<td>35</td>
<td>20</td>
<td>92</td>
<td>275</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 14:00</td>
<td>33</td>
<td>32</td>
<td>23</td>
<td>23</td>
<td>111</td>
<td>332</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 15:00</td>
<td>32</td>
<td>17</td>
<td>34</td>
<td>25</td>
<td>108</td>
<td>213</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 16:00</td>
<td>28</td>
<td>23</td>
<td>20</td>
<td>22</td>
<td>93</td>
<td>370</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 17:00</td>
<td>32</td>
<td>23</td>
<td>33</td>
<td>18</td>
<td>106</td>
<td>423</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 18:00</td>
<td>20</td>
<td>29</td>
<td>18</td>
<td>19</td>
<td>86</td>
<td>255</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 19:00</td>
<td>33</td>
<td>12</td>
<td>24</td>
<td>19</td>
<td>88</td>
<td>261</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 20:00</td>
<td>23</td>
<td>26</td>
<td>26</td>
<td>25</td>
<td>100</td>
<td>399</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 21:00</td>
<td>25</td>
<td>10</td>
<td>18</td>
<td>17</td>
<td>70</td>
<td>277</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 22:00</td>
<td>29</td>
<td>33</td>
<td>30</td>
<td>25</td>
<td>117</td>
<td>346</td>
</tr>
<tr>
<td>Tuesday, 18 August, 2020 23:00</td>
<td>18</td>
<td>20</td>
<td>14</td>
<td>16</td>
<td>68</td>
<td>268</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 00:00</td>
<td>8</td>
<td>2</td>
<td>7</td>
<td>0</td>
<td>17</td>
<td>33</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 01:00</td>
<td>2</td>
<td>8</td>
<td>1</td>
<td>5</td>
<td>16</td>
<td>28</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 02:00</td>
<td>3</td>
<td>5</td>
<td>3</td>
<td>0</td>
<td>11</td>
<td>31</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 03:00</td>
<td>6</td>
<td>4</td>
<td>1</td>
<td>4</td>
<td>15</td>
<td>59</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 04:00</td>
<td>4</td>
<td>8</td>
<td>6</td>
<td>4</td>
<td>22</td>
<td>62</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 05:00</td>
<td>0</td>
<td>4</td>
<td>1</td>
<td>2</td>
<td>7</td>
<td>13</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 06:00</td>
<td>8</td>
<td>2</td>
<td>5</td>
<td>2</td>
<td>17</td>
<td>66</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 07:00</td>
<td>3</td>
<td>2</td>
<td>0</td>
<td>0</td>
<td>5</td>
<td>19</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 08:00</td>
<td>27</td>
<td>15</td>
<td>22</td>
<td>16</td>
<td>80</td>
<td>319</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 09:00</td>
<td>35</td>
<td>27</td>
<td>34</td>
<td>22</td>
<td>118</td>
<td>234</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 10:00</td>
<td>19</td>
<td>23</td>
<td>36</td>
<td>17</td>
<td>95</td>
<td>186</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 11:00</td>
<td>28</td>
<td>23</td>
<td>22</td>
<td>17</td>
<td>90</td>
<td>266</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 12:00</td>
<td>34</td>
<td>11</td>
<td>31</td>
<td>22</td>
<td>98</td>
<td>193</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 13:00</td>
<td>27</td>
<td>22</td>
<td>13</td>
<td>18</td>
<td>80</td>
<td>156</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 14:00</td>
<td>17</td>
<td>12</td>
<td>32</td>
<td>20</td>
<td>81</td>
<td>159</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 15:00</td>
<td>18</td>
<td>18</td>
<td>35</td>
<td>18</td>
<td>89</td>
<td>177</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 16:00</td>
<td>25</td>
<td>25</td>
<td>31</td>
<td>19</td>
<td>100</td>
<td>397</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 17:00</td>
<td>31</td>
<td>29</td>
<td>24</td>
<td>22</td>
<td>106</td>
<td>313</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 18:00</td>
<td>18</td>
<td>18</td>
<td>34</td>
<td>19</td>
<td>89</td>
<td>266</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 19:00</td>
<td>20</td>
<td>12</td>
<td>12</td>
<td>23</td>
<td>67</td>
<td>129</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 20:00</td>
<td>25</td>
<td>18</td>
<td>38</td>
<td>19</td>
<td>100</td>
<td>396</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 21:00</td>
<td>23</td>
<td>11</td>
<td>16</td>
<td>21</td>
<td>71</td>
<td>279</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 22:00</td>
<td>32</td>
<td>18</td>
<td>28</td>
<td>22</td>
<td>100</td>
<td>196</td>
</tr>
<tr>
<td>Wednesday, 19 August, 2020 23:00</td>
<td>29</td>
<td>28</td>
<td>33</td>
<td>25</td>
<td>115</td>
<td>227</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 00:00</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>8</td>
<td>23</td>
<td>43</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 01:00</td>
<td>3</td>
<td>5</td>
<td>7</td>
<td>1</td>
<td>16</td>
<td>59</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 02:00</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>18</td>
<td>69</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 03:00</td>
<td>7</td>
<td>7</td>
<td>0</td>
<td>5</td>
<td>19</td>
<td>52</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 04:00</td>
<td>5</td>
<td>0</td>
<td>2</td>
<td>8</td>
<td>15</td>
<td>40</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 05:00</td>
<td>7</td>
<td>4</td>
<td>5</td>
<td>7</td>
<td>23</td>
<td>41</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 06:00</td>
<td>4</td>
<td>3</td>
<td>7</td>
<td>3</td>
<td>17</td>
<td>30</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 07:00</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>2</td>
<td>11</td>
<td>40</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 08:00</td>
<td>33</td>
<td>28</td>
<td>22</td>
<td>25</td>
<td>108</td>
<td>428</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 09:00</td>
<td>32</td>
<td>32</td>
<td>10</td>
<td>22</td>
<td>96</td>
<td>382</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 10:00</td>
<td>26</td>
<td>29</td>
<td>23</td>
<td>17</td>
<td>95</td>
<td>281</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 11:00</td>
<td>22</td>
<td>10</td>
<td>20</td>
<td>25</td>
<td>77</td>
<td>303</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 12:00</td>
<td>33</td>
<td>26</td>
<td>21</td>
<td>17</td>
<td>97</td>
<td>192</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 13:00</td>
<td>23</td>
<td>25</td>
<td>23</td>
<td>19</td>
<td>90</td>
<td>356</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 14:00</td>
<td>30</td>
<td>14</td>
<td>14</td>
<td>17</td>
<td>75</td>
<td>149</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 15:00</td>
<td>21</td>
<td>27</td>
<td>20</td>
<td>16</td>
<td>84</td>
<td>251</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 16:00</td>
<td>18</td>
<td>26</td>
<td>22</td>
<td>22</td>
<td>88</td>
<td>263</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 17:00</td>
<td>27</td>
<td>18</td>
<td>14</td>
<td>18</td>
<td>77</td>
<td>304</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 18:00</td>
<td>18</td>
<td>23</td>
<td>13</td>
<td>21</td>
<td>75</td>
<td>298</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 19:00</td>
<td>31</td>
<td>31</td>
<td>34</td>
<td>24</td>
<td>120</td>
<td>239</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 20:00</td>
<td>17</td>
<td>19</td>
<td>22</td>
<td>24</td>
<td>82</td>
<td>323</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 21:00</td>
<td>35</td>
<td>17</td>
<td>40</td>
<td>21</td>
<td>113</td>
<td>224</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 22:00</td>
<td>26</td>
<td>12</td>
<td>28</td>
<td>23</td>
<td>89</td>
<td>175</td>
</tr>
<tr>
<td>Thursday, 20 August, 2020 23:00</td>
<td>26</td>
<td>29</td>
<td>40</td>
<td>20</td>
<td>115</td>
<td>342</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 00:00</td>
<td>0</td>
<td>4</td>
<td>1</td>
<td>4</td>
<td>9</td>
<td>32</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 01:00</td>
<td>6</td>
<td>2</td>
<td>8</td>
<td>6</td>
<td>22</td>
<td>41</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 02:00</td>
<td>6</td>
<td>6</td>
<td>0</td>
<td>3</td>
<td>15</td>
<td>27</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 03:00</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>7</td>
<td>16</td>
<td>63</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 04:00</td>
<td>1</td>
<td>3</td>
<td>5</td>
<td>1</td>
<td>10</td>
<td>18</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 05:00</td>
<td>0</td>
<td>6</td>
<td>8</td>
<td>5</td>
<td>19</td>
<td>52</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 06:00</td>
<td>1</td>
<td>3</td>
<td>7</td>
<td>6</td>
<td>17</td>
<td>65</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 07:00</td>
<td>7</td>
<td>4</td>
<td>4</td>
<td>7</td>
<td>22</td>
<td>39</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 08:00</td>
<td>16</td>
<td>17</td>
<td>25</td>
<td>23</td>
<td>81</td>
<td>320</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 09:00</td>
<td>21</td>
<td>33</td>
<td>25</td>
<td>25</td>
<td>104</td>
<td>204</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 10:00</td>
<td>28</td>
<td>25</td>
<td>16</td>
<td>21</td>
<td>90</td>
<td>176</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 11:00</td>
<td>23</td>
<td>16</td>
<td>19</td>
<td>25</td>
<td>83</td>
<td>329</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 12:00</td>
<td>16</td>
<td>21</td>
<td>14</td>
<td>25</td>
<td>76</td>
<td>303</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 13:00</td>
<td>15</td>
<td>17</td>
<td>35</td>
<td>16</td>
<td>83</td>
<td>329</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 14:00</td>
<td>35</td>
<td>33</td>
<td>11</td>
<td>18</td>
<td>97</td>
<td>384</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 15:00</td>
<td>22</td>
<td>27</td>
<td>31</td>
<td>25</td>
<td>105</td>
<td>314</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 16:00</td>
<td>26</td>
<td>28</td>
<td>39</td>
<td>22</td>
<td>115</td>
<td>458</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 17:00</td>
<td>26</td>
<td>34</td>
<td>33</td>
<td>19</td>
<td>112</td>
<td>447</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 18:00</td>
<td>35</td>
<td>25</td>
<td>13</td>
<td>19</td>
<td>92</td>
<td>367</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 19:00</td>
<td>19</td>
<td>11</td>
<td>20</td>
<td>19</td>
<td>69</td>
<td>271</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 20:00</td>
<td>28</td>
<td>35</td>
<td>27</td>
<td>25</td>
<td>115</td>
<td>342</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 21:00</td>
<td>16</td>
<td>20</td>
<td>11</td>
<td>23</td>
<td>70</td>
<td>277</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 22:00</td>
<td>30</td>
<td>35</td>
<td>38</td>
<td>24</td>
<td>127</td>
<td>380</td>
</tr>
<tr>
<td>Friday, 21 August, 2020 23:00</td>
<td>29</td>
<td>18</td>
<td>27</td>
<td>17</td>
<td>91</td>
<td>269</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 00:00</td>
<td>8</td>
<td>0</td>
<td>4</td>
<td>4</td>
<td>16</td>
<td>63</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 01:00</td>
<td>6</td>
<td>4</td>
<td>7</td>
<td>0</td>
<td>17</td>
<td>64</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 02:00</td>
<td>6</td>
<td>0</td>
<td>7</td>
<td>5</td>
<td>18</td>
<td>52</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 03:00</td>
<td>4</td>
<td>6</td>
<td>4</td>
<td>6</td>
<td>20</td>
<td>58</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 04:00</td>
<td>4</td>
<td>8</td>
<td>2</td>
<td>6</td>
<td>20</td>
<td>35</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 05:00</td>
<td>1</td>
<td>0</td>
<td>3</td>
<td>3</td>
<td>7</td>
<td>23</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 06:00</td>
<td>3</td>
<td>5</td>
<td>1</td>
<td>6</td>
<td>15</td>
<td>57</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 07:00</td>
<td>6</td>
<td>1</td>
<td>1</td>
<td>0</td>
<td>8</td>
<td>13</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 08:00</td>
<td>25</td>
<td>18</td>
<td>15</td>
<td>20</td>
<td>78</td>
<td>231</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 09:00</td>
<td>31</td>
<td>15</td>
<td>21</td>
<td>23</td>
<td>90</td>
<td>175</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 10:00</td>
<td>19</td>
<td>20</td>
<td>35</td>
<td>20</td>
<td>94</td>
<td>372</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 11:00</td>
<td>21</td>
<td>16</td>
<td>40</td>
<td>16</td>
<td>93</td>
<td>184</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 12:00</td>
<td>30</td>
<td>14</td>
<td>22</td>
<td>18</td>
<td>84</td>
<td>250</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 13:00</td>
<td>16</td>
<td>32</td>
<td>10</td>
<td>17</td>
<td>75</td>
<td>298</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 14:00</td>
<td>18</td>
<td>21</td>
<td>26</td>
<td>18</td>
<td>83</td>
<td>165</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 15:00</td>
<td>29</td>
<td>12</td>
<td>30</td>
<td>25</td>
<td>96</td>
<td>285</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 16:00</td>
<td>21</td>
<td>34</td>
<td>16</td>
<td>22</td>
<td>93</td>
<td>275</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 17:00</td>
<td>32</td>
<td>29</td>
<td>25</td>
<td>16</td>
<td>102</td>
<td>404</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 18:00</td>
<td>20</td>
<td>33</td>
<td>32</td>
<td>16</td>
<td>101</td>
<td>400</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 19:00</td>
<td>23</td>
<td>19</td>
<td>21</td>
<td>18</td>
<td>81</td>
<td>320</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 20:00</td>
<td>33</td>
<td>17</td>
<td>35</td>
<td>24</td>
<td>109</td>
<td>214</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 21:00</td>
<td>17</td>
<td>26</td>
<td>29</td>
<td>25</td>
<td>97</td>
<td>189</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 22:00</td>
<td>15</td>
<td>25</td>
<td>31</td>
<td>16</td>
<td>87</td>
<td>344</td>
</tr>
<tr>
<td>Saturday, 22 August, 2020 23:00</td>
<td>15</td>
<td>16</td>
<td>32</td>
<td>22</td>
<td>85</td>
<td>253</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 00:00</td>
<td>8</td>
<td>5</td>
<td>5</td>
<td>3</td>
<td>21</td>
<td>62</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 01:00</td>
<td>6</td>
<td>7</td>
<td>8</td>
<td>3</td>
<td>24</td>
<td>92</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 02:00</td>
<td>7</td>
<td>2</td>
<td>6</td>
<td>3</td>
<td>18</td>
<td>71</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 03:00</td>
<td>6</td>
<td>4</td>
<td>7</td>
<td>4</td>
<td>21</td>
<td>59</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 04:00</td>
<td>1</td>
<td>6</td>
<td>0</td>
<td>0</td>
<td>7</td>
<td>27</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 05:00</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>5</td>
<td>9</td>
<td>33</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 06:00</td>
<td>5</td>
<td>6</td>
<td>0</td>
<td>6</td>
<td>17</td>
<td>47</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 07:00</td>
<td>2</td>
<td>2</td>
<td>0</td>
<td>8</td>
<td>12</td>
<td>19</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 08:00</td>
<td>28</td>
<td>29</td>
<td>38</td>
<td>24</td>
<td>119</td>
<td>354</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 09:00</td>
<td>19</td>
<td>20</td>
<td>21</td>
<td>20</td>
<td>80</td>
<td>155</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 10:00</td>
<td>31</td>
<td>11</td>
<td>19</td>
<td>18</td>
<td>79</td>
<td>157</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 11:00</td>
<td>35</td>
<td>14</td>
<td>35</td>
<td>17</td>
<td>101</td>
<td>302</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 12:00</td>
<td>34</td>
<td>15</td>
<td>34</td>
<td>25</td>
<td>108</td>
<td>322</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 13:00</td>
<td>27</td>
<td>31</td>
<td>16</td>
<td>24</td>
<td>98</td>
<td>192</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 14:00</td>
<td>21</td>
<td>20</td>
<td>29</td>
<td>16</td>
<td>86</td>
<td>169</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 15:00</td>
<td>20</td>
<td>15</td>
<td>22</td>
<td>18</td>
<td>75</td>
<td>149</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 16:00</td>
<td>33</td>
<td>27</td>
<td>34</td>
<td>23</td>
<td>117</td>
<td>465</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 17:00</td>
<td>17</td>
<td>11</td>
<td>32</td>
<td>16</td>
<td>76</td>
<td>223</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 18:00</td>
<td>21</td>
<td>10</td>
<td>10</td>
<td>24</td>
<td>65</td>
<td>258</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 19:00</td>
<td>34</td>
<td>27</td>
<td>19</td>
<td>22</td>
<td>102</td>
<td>407</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 20:00</td>
<td>21</td>
<td>29</td>
<td>28</td>
<td>25</td>
<td>103</td>
<td>304</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 21:00</td>
<td>20</td>
<td>10</td>
<td>27</td>
<td>18</td>
<td>75</td>
<td>148</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 22:00</td>
<td>17</td>
<td>23</td>
<td>33</td>
<td>17</td>
<td>90</td>
<td>268</td>
</tr>
<tr>
<td>Sunday, 23 August, 2020 23:00</td>
<td>26</td>
<td>32</td>
<td>24</td>
<td>21</td>
<td>103</td>
<td>408</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 00:00</td>
<td>7</td>
<td>8</td>
<td>1</td>
<td>6</td>
<td>22</td>
<td>42</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 01:00</td>
<td>2</td>
<td>4</td>
<td>6</td>
<td>6</td>
<td>18</td>
<td>32</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 02:00</td>
<td>4</td>
<td>5</td>
<td>0</td>
<td>5</td>
<td>14</td>
<td>23</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 03:00</td>
<td>8</td>
<td>0</td>
<td>5</td>
<td>7</td>
<td>20</td>
<td>59</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 04:00</td>
<td>0</td>
<td>3</td>
<td>0</td>
<td>3</td>
<td>6</td>
<td>21</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 05:00</td>
<td>5</td>
<td>2</td>
<td>0</td>
<td>7</td>
<td>14</td>
<td>27</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 06:00</td>
<td>6</td>
<td>1</td>
<td>8</td>
<td>1</td>
<td>16</td>
<td>47</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 07:00</td>
<td>4</td>
<td>7</td>
<td>8</td>
<td>8</td>
<td>27</td>
<td>49</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 08:00</td>
<td>27</td>
<td>16</td>
<td>37</td>
<td>17</td>
<td>97</td>
<td>385</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 09:00</td>
<td>35</td>
<td>11</td>
<td>25</td>
<td>23</td>
<td>94</td>
<td>185</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 10:00</td>
<td>23</td>
<td>19</td>
<td>24</td>
<td>23</td>
<td>89</td>
<td>176</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 11:00</td>
<td>24</td>
<td>18</td>
<td>29</td>
<td>20</td>
<td>91</td>
<td>360</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 12:00</td>
<td>29</td>
<td>31</td>
<td>14</td>
<td>25</td>
<td>99</td>
<td>294</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 13:00</td>
<td>23</td>
<td>24</td>
<td>30</td>
<td>19</td>
<td>96</td>
<td>189</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 14:00</td>
<td>16</td>
<td>30</td>
<td>12</td>
<td>20</td>
<td>78</td>
<td>230</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 15:00</td>
<td>33</td>
<td>20</td>
<td>37</td>
<td>25</td>
<td>115</td>
<td>340</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 16:00</td>
<td>33</td>
<td>26</td>
<td>27</td>
<td>19</td>
<td>105</td>
<td>207</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 17:00</td>
<td>22</td>
<td>33</td>
<td>24</td>
<td>25</td>
<td>104</td>
<td>311</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 18:00</td>
<td>21</td>
<td>14</td>
<td>36</td>
<td>25</td>
<td>96</td>
<td>191</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 19:00</td>
<td>21</td>
<td>19</td>
<td>20</td>
<td>16</td>
<td>76</td>
<td>224</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 20:00</td>
<td>25</td>
<td>22</td>
<td>33</td>
<td>24</td>
<td>104</td>
<td>309</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 21:00</td>
<td>27</td>
<td>29</td>
<td>30</td>
<td>19</td>
<td>105</td>
<td>311</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 22:00</td>
<td>19</td>
<td>28</td>
<td>30</td>
<td>17</td>
<td>94</td>
<td>277</td>
</tr>
<tr>
<td>Monday, 24 August, 2020 23:00</td>
<td>18</td>
<td>34</td>
<td>27</td>
<td>16</td>
<td>95</td>
<td>282</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 00:00</td>
<td>5</td>
<td>5</td>
<td>1</td>
<td>2</td>
<td>13</td>
<td>51</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 01:00</td>
<td>0</td>
<td>2</td>
<td>6</td>
<td>8</td>
<td>16</td>
<td>59</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 02:00</td>
<td>6</td>
<td>2</td>
<td>0</td>
<td>2</td>
<td>10</td>
<td>37</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 03:00</td>
<td>8</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>16</td>
<td>47</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 04:00</td>
<td>3</td>
<td>3</td>
<td>6</td>
<td>1</td>
<td>13</td>
<td>23</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 05:00</td>
<td>0</td>
<td>1</td>
<td>6</td>
<td>7</td>
<td>14</td>
<td>40</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 06:00</td>
<td>5</td>
<td>2</td>
<td>4</td>
<td>5</td>
<td>16</td>
<td>62</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 07:00</td>
<td>6</td>
<td>6</td>
<td>8</td>
<td>0</td>
<td>20</td>
<td>35</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 08:00</td>
<td>22</td>
<td>10</td>
<td>15</td>
<td>23</td>
<td>70</td>
<td>136</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 09:00</td>
<td>18</td>
<td>26</td>
<td>31</td>
<td>17</td>
<td>92</td>
<td>363</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 10:00</td>
<td>20</td>
<td>23</td>
<td>27</td>
<td>24</td>
<td>94</td>
<td>187</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 11:00</td>
<td>15</td>
<td>15</td>
<td>31</td>
<td>23</td>
<td>84</td>
<td>167</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 12:00</td>
<td>32</td>
<td>19</td>
<td>28</td>
<td>23</td>
<td>102</td>
<td>203</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 13:00</td>
<td>16</td>
<td>20</td>
<td>10</td>
<td>16</td>
<td>62</td>
<td>185</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 14:00</td>
<td>19</td>
<td>15</td>
<td>28</td>
<td>21</td>
<td>83</td>
<td>163</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 15:00</td>
<td>19</td>
<td>17</td>
<td>18</td>
<td>19</td>
<td>73</td>
<td>291</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 16:00</td>
<td>28</td>
<td>12</td>
<td>37</td>
<td>18</td>
<td>95</td>
<td>185</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 17:00</td>
<td>33</td>
<td>18</td>
<td>36</td>
<td>25</td>
<td>112</td>
<td>334</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 18:00</td>
<td>28</td>
<td>15</td>
<td>10</td>
<td>23</td>
<td>76</td>
<td>224</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 19:00</td>
<td>30</td>
<td>34</td>
<td>34</td>
<td>23</td>
<td>121</td>
<td>237</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 20:00</td>
<td>24</td>
<td>26</td>
<td>34</td>
<td>16</td>
<td>100</td>
<td>298</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 21:00</td>
<td>32</td>
<td>28</td>
<td>12</td>
<td>16</td>
<td>88</td>
<td>263</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 22:00</td>
<td>20</td>
<td>16</td>
<td>19</td>
<td>19</td>
<td>74</td>
<td>220</td>
</tr>
<tr>
<td>Tuesday, 25 August, 2020 23:00</td>
<td>31</td>
<td>17</td>
<td>37</td>
<td>22</td>
<td>107</td>
<td>210</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 00:00</td>
<td>2</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>12</td>
<td>44</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 01:00</td>
<td>8</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>20</td>
<td>39</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 02:00</td>
<td>1</td>
<td>5</td>
<td>2</td>
<td>7</td>
<td>15</td>
<td>28</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 03:00</td>
<td>4</td>
<td>3</td>
<td>5</td>
<td>6</td>
<td>18</td>
<td>51</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 04:00</td>
<td>4</td>
<td>7</td>
<td>2</td>
<td>8</td>
<td>21</td>
<td>38</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 05:00</td>
<td>6</td>
<td>1</td>
<td>7</td>
<td>7</td>
<td>21</td>
<td>82</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 06:00</td>
<td>7</td>
<td>4</td>
<td>5</td>
<td>5</td>
<td>21</td>
<td>60</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 07:00</td>
<td>5</td>
<td>1</td>
<td>5</td>
<td>4</td>
<td>15</td>
<td>40</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 08:00</td>
<td>23</td>
<td>14</td>
<td>30</td>
<td>24</td>
<td>91</td>
<td>270</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 09:00</td>
<td>24</td>
<td>27</td>
<td>19</td>
<td>23</td>
<td>93</td>
<td>183</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 10:00</td>
<td>31</td>
<td>23</td>
<td>10</td>
<td>23</td>
<td>87</td>
<td>343</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 11:00</td>
<td>29</td>
<td>11</td>
<td>25</td>
<td>25</td>
<td>90</td>
<td>268</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 12:00</td>
<td>25</td>
<td>26</td>
<td>36</td>
<td>20</td>
<td>107</td>
<td>425</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 13:00</td>
<td>28</td>
<td>10</td>
<td>34</td>
<td>21</td>
<td>93</td>
<td>185</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 14:00</td>
<td>23</td>
<td>29</td>
<td>34</td>
<td>22</td>
<td>108</td>
<td>322</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 15:00</td>
<td>30</td>
<td>22</td>
<td>19</td>
<td>24</td>
<td>95</td>
<td>282</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 16:00</td>
<td>18</td>
<td>17</td>
<td>18</td>
<td>18</td>
<td>71</td>
<td>211</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 17:00</td>
<td>18</td>
<td>20</td>
<td>14</td>
<td>18</td>
<td>70</td>
<td>137</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 18:00</td>
<td>33</td>
<td>35</td>
<td>27</td>
<td>22</td>
<td>117</td>
<td>229</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 19:00</td>
<td>23</td>
<td>17</td>
<td>32</td>
<td>16</td>
<td>88</td>
<td>173</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 20:00</td>
<td>31</td>
<td>30</td>
<td>28</td>
<td>18</td>
<td>107</td>
<td>426</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 21:00</td>
<td>18</td>
<td>11</td>
<td>39</td>
<td>17</td>
<td>85</td>
<td>167</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 22:00</td>
<td>32</td>
<td>30</td>
<td>22</td>
<td>25</td>
<td>109</td>
<td>217</td>
</tr>
<tr>
<td>Wednesday, 26 August, 2020 23:00</td>
<td>24</td>
<td>23</td>
<td>35</td>
<td>18</td>
<td>100</td>
<td>396</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 00:00</td>
<td>8</td>
<td>5</td>
<td>0</td>
<td>1</td>
<td>14</td>
<td>26</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 01:00</td>
<td>3</td>
<td>5</td>
<td>6</td>
<td>5</td>
<td>19</td>
<td>55</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 02:00</td>
<td>2</td>
<td>4</td>
<td>6</td>
<td>0</td>
<td>12</td>
<td>46</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 03:00</td>
<td>5</td>
<td>3</td>
<td>8</td>
<td>4</td>
<td>20</td>
<td>35</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 04:00</td>
<td>7</td>
<td>7</td>
<td>2</td>
<td>0</td>
<td>16</td>
<td>46</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 05:00</td>
<td>4</td>
<td>8</td>
<td>0</td>
<td>0</td>
<td>12</td>
<td>21</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 06:00</td>
<td>8</td>
<td>4</td>
<td>2</td>
<td>2</td>
<td>16</td>
<td>44</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 07:00</td>
<td>0</td>
<td>5</td>
<td>8</td>
<td>5</td>
<td>18</td>
<td>52</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 08:00</td>
<td>20</td>
<td>15</td>
<td>23</td>
<td>25</td>
<td>83</td>
<td>327</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 09:00</td>
<td>25</td>
<td>17</td>
<td>11</td>
<td>16</td>
<td>69</td>
<td>134</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 10:00</td>
<td>15</td>
<td>29</td>
<td>38</td>
<td>18</td>
<td>100</td>
<td>197</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 11:00</td>
<td>20</td>
<td>30</td>
<td>10</td>
<td>22</td>
<td>82</td>
<td>324</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 12:00</td>
<td>26</td>
<td>14</td>
<td>13</td>
<td>19</td>
<td>72</td>
<td>211</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 13:00</td>
<td>19</td>
<td>12</td>
<td>38</td>
<td>17</td>
<td>86</td>
<td>167</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 14:00</td>
<td>19</td>
<td>31</td>
<td>18</td>
<td>18</td>
<td>86</td>
<td>342</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 15:00</td>
<td>24</td>
<td>33</td>
<td>12</td>
<td>18</td>
<td>87</td>
<td>173</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 16:00</td>
<td>28</td>
<td>10</td>
<td>28</td>
<td>20</td>
<td>86</td>
<td>254</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 17:00</td>
<td>15</td>
<td>27</td>
<td>22</td>
<td>25</td>
<td>89</td>
<td>264</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 18:00</td>
<td>34</td>
<td>16</td>
<td>35</td>
<td>20</td>
<td>105</td>
<td>314</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 19:00</td>
<td>23</td>
<td>29</td>
<td>38</td>
<td>21</td>
<td>111</td>
<td>221</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 20:00</td>
<td>19</td>
<td>11</td>
<td>32</td>
<td>21</td>
<td>83</td>
<td>164</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 21:00</td>
<td>20</td>
<td>16</td>
<td>11</td>
<td>20</td>
<td>67</td>
<td>266</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 22:00</td>
<td>34</td>
<td>13</td>
<td>13</td>
<td>20</td>
<td>80</td>
<td>157</td>
</tr>
<tr>
<td>Thursday, 27 August, 2020 23:00</td>
<td>24</td>
<td>31</td>
<td>13</td>
<td>17</td>
<td>85</td>
<td>335</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 00:00</td>
<td>0</td>
<td>2</td>
<td>0</td>
<td>5</td>
<td>7</td>
<td>26</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 01:00</td>
<td>6</td>
<td>1</td>
<td>4</td>
<td>0</td>
<td>11</td>
<td>19</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 02:00</td>
<td>0</td>
<td>0</td>
<td>3</td>
<td>0</td>
<td>3</td>
<td>7</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 03:00</td>
<td>6</td>
<td>8</td>
<td>2</td>
<td>7</td>
<td>23</td>
<td>87</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 04:00</td>
<td>8</td>
<td>7</td>
<td>7</td>
<td>5</td>
<td>27</td>
<td>49</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 05:00</td>
<td>1</td>
<td>6</td>
<td>1</td>
<td>8</td>
<td>16</td>
<td>47</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 06:00</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>7</td>
<td>8</td>
<td>21</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 07:00</td>
<td>0</td>
<td>1</td>
<td>4</td>
<td>6</td>
<td>11</td>
<td>41</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 08:00</td>
<td>34</td>
<td>13</td>
<td>35</td>
<td>23</td>
<td>105</td>
<td>208</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 09:00</td>
<td>31</td>
<td>22</td>
<td>32</td>
<td>24</td>
<td>109</td>
<td>325</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 10:00</td>
<td>17</td>
<td>19</td>
<td>40</td>
<td>16</td>
<td>92</td>
<td>183</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 11:00</td>
<td>26</td>
<td>11</td>
<td>24</td>
<td>25</td>
<td>86</td>
<td>171</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 12:00</td>
<td>34</td>
<td>22</td>
<td>35</td>
<td>20</td>
<td>111</td>
<td>330</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 13:00</td>
<td>32</td>
<td>18</td>
<td>39</td>
<td>18</td>
<td>107</td>
<td>211</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 14:00</td>
<td>35</td>
<td>10</td>
<td>20</td>
<td>20</td>
<td>85</td>
<td>253</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 15:00</td>
<td>26</td>
<td>31</td>
<td>30</td>
<td>20</td>
<td>107</td>
<td>425</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 16:00</td>
<td>18</td>
<td>29</td>
<td>40</td>
<td>20</td>
<td>107</td>
<td>318</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 17:00</td>
<td>32</td>
<td>12</td>
<td>14</td>
<td>24</td>
<td>82</td>
<td>244</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 18:00</td>
<td>21</td>
<td>25</td>
<td>26</td>
<td>18</td>
<td>90</td>
<td>179</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 19:00</td>
<td>34</td>
<td>30</td>
<td>32</td>
<td>16</td>
<td>112</td>
<td>446</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 20:00</td>
<td>26</td>
<td>24</td>
<td>18</td>
<td>23</td>
<td>91</td>
<td>180</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 21:00</td>
<td>26</td>
<td>24</td>
<td>35</td>
<td>20</td>
<td>105</td>
<td>209</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 22:00</td>
<td>20</td>
<td>35</td>
<td>30</td>
<td>18</td>
<td>103</td>
<td>408</td>
</tr>
<tr>
<td>Friday, 28 August, 2020 23:00</td>
<td>25</td>
<td>26</td>
<td>37</td>
<td>23</td>
<td>111</td>
<td>221</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 00:00</td>
<td>7</td>
<td>2</td>
<td>8</td>
<td>5</td>
<td>22</td>
<td>84</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 01:00</td>
<td>6</td>
<td>5</td>
<td>2</td>
<td>5</td>
<td>18</td>
<td>33</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 02:00</td>
<td>2</td>
<td>3</td>
<td>8</td>
<td>3</td>
<td>16</td>
<td>29</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 03:00</td>
<td>4</td>
<td>3</td>
<td>8</td>
<td>3</td>
<td>18</td>
<td>52</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 04:00</td>
<td>7</td>
<td>8</td>
<td>2</td>
<td>7</td>
<td>24</td>
<td>43</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 05:00</td>
<td>6</td>
<td>6</td>
<td>0</td>
<td>2</td>
<td>14</td>
<td>40</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 06:00</td>
<td>5</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>20</td>
<td>57</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 07:00</td>
<td>3</td>
<td>0</td>
<td>7</td>
<td>3</td>
<td>13</td>
<td>22</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 08:00</td>
<td>31</td>
<td>10</td>
<td>18</td>
<td>18</td>
<td>77</td>
<td>304</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 09:00</td>
<td>21</td>
<td>34</td>
<td>22</td>
<td>16</td>
<td>93</td>
<td>367</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 10:00</td>
<td>29</td>
<td>25</td>
<td>26</td>
<td>21</td>
<td>101</td>
<td>198</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 11:00</td>
<td>15</td>
<td>12</td>
<td>22</td>
<td>25</td>
<td>74</td>
<td>220</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 12:00</td>
<td>23</td>
<td>23</td>
<td>37</td>
<td>22</td>
<td>105</td>
<td>312</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 13:00</td>
<td>23</td>
<td>27</td>
<td>17</td>
<td>18</td>
<td>85</td>
<td>336</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 14:00</td>
<td>35</td>
<td>31</td>
<td>16</td>
<td>19</td>
<td>101</td>
<td>301</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 15:00</td>
<td>29</td>
<td>16</td>
<td>15</td>
<td>23</td>
<td>83</td>
<td>327</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 16:00</td>
<td>33</td>
<td>34</td>
<td>26</td>
<td>20</td>
<td>113</td>
<td>338</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 17:00</td>
<td>34</td>
<td>34</td>
<td>25</td>
<td>20</td>
<td>113</td>
<td>450</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 18:00</td>
<td>18</td>
<td>31</td>
<td>10</td>
<td>17</td>
<td>76</td>
<td>302</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 19:00</td>
<td>28</td>
<td>29</td>
<td>36</td>
<td>16</td>
<td>109</td>
<td>215</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 20:00</td>
<td>20</td>
<td>13</td>
<td>17</td>
<td>20</td>
<td>70</td>
<td>138</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 21:00</td>
<td>32</td>
<td>11</td>
<td>31</td>
<td>17</td>
<td>91</td>
<td>271</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 22:00</td>
<td>22</td>
<td>31</td>
<td>37</td>
<td>25</td>
<td>115</td>
<td>456</td>
</tr>
<tr>
<td>Saturday, 29 August, 2020 23:00</td>
<td>26</td>
<td>35</td>
<td>15</td>
<td>24</td>
<td>100</td>
<td>299</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 00:00</td>
<td>8</td>
<td>4</td>
<td>3</td>
<td>5</td>
<td>20</td>
<td>36</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 01:00</td>
<td>7</td>
<td>4</td>
<td>8</td>
<td>5</td>
<td>24</td>
<td>91</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 02:00</td>
<td>1</td>
<td>3</td>
<td>0</td>
<td>0</td>
<td>4</td>
<td>7</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 03:00</td>
<td>1</td>
<td>6</td>
<td>1</td>
<td>0</td>
<td>8</td>
<td>23</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 04:00</td>
<td>1</td>
<td>2</td>
<td>1</td>
<td>6</td>
<td>10</td>
<td>37</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 05:00</td>
<td>4</td>
<td>2</td>
<td>0</td>
<td>5</td>
<td>11</td>
<td>42</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 06:00</td>
<td>0</td>
<td>2</td>
<td>7</td>
<td>6</td>
<td>15</td>
<td>55</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 07:00</td>
<td>8</td>
<td>1</td>
<td>4</td>
<td>3</td>
<td>16</td>
<td>61</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 08:00</td>
<td>35</td>
<td>11</td>
<td>22</td>
<td>18</td>
<td>86</td>
<td>341</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 09:00</td>
<td>21</td>
<td>21</td>
<td>27</td>
<td>23</td>
<td>92</td>
<td>182</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 10:00</td>
<td>26</td>
<td>30</td>
<td>14</td>
<td>25</td>
<td>95</td>
<td>375</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 11:00</td>
<td>21</td>
<td>14</td>
<td>37</td>
<td>22</td>
<td>94</td>
<td>277</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 12:00</td>
<td>22</td>
<td>30</td>
<td>21</td>
<td>22</td>
<td>95</td>
<td>187</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 13:00</td>
<td>15</td>
<td>26</td>
<td>11</td>
<td>22</td>
<td>74</td>
<td>143</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 14:00</td>
<td>25</td>
<td>25</td>
<td>35</td>
<td>23</td>
<td>108</td>
<td>215</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 15:00</td>
<td>15</td>
<td>26</td>
<td>16</td>
<td>16</td>
<td>73</td>
<td>290</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 16:00</td>
<td>31</td>
<td>12</td>
<td>28</td>
<td>16</td>
<td>87</td>
<td>256</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 17:00</td>
<td>17</td>
<td>34</td>
<td>20</td>
<td>23</td>
<td>94</td>
<td>184</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 18:00</td>
<td>16</td>
<td>29</td>
<td>19</td>
<td>20</td>
<td>84</td>
<td>167</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 19:00</td>
<td>23</td>
<td>15</td>
<td>22</td>
<td>25</td>
<td>85</td>
<td>339</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 20:00</td>
<td>28</td>
<td>14</td>
<td>37</td>
<td>24</td>
<td>103</td>
<td>305</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 21:00</td>
<td>32</td>
<td>25</td>
<td>28</td>
<td>24</td>
<td>109</td>
<td>217</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 22:00</td>
<td>31</td>
<td>20</td>
<td>19</td>
<td>17</td>
<td>87</td>
<td>170</td>
</tr>
<tr>
<td>Sunday, 30 August, 2020 23:00</td>
<td>31</td>
<td>13</td>
<td>27</td>
<td>19</td>
<td>90</td>
<td>355</td>
</tr>
</tbody></table>
      </div>
    );
  }
}

const styles = {
  map: {
    width: '100%',
    height: '82vh',
    border: 'none'
  }
};
