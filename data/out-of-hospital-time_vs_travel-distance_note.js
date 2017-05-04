// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: [24.0, 33.0, 41.0, 24.0, 41.0, 57.0, 38.0, 48.0, 68.0, 25.0, 40.9, 52.0, 31.0, 46.0, 76.0, 89.0, 24.0, 52.0, 88.0, 46.0, 56.0, 50.0, 76.0, 73.0, 63.0, 38.0, 52.0, 117.0, 68.0, 57.0, 64.0, 74.0, 46.0, 72.0, 38.0, 50.4, 78.0, 38.0, 57.9, 46.0, 78.0, 62.0, 88.0, 41.0, 48.0, 38.0, 56.0, 55.0, 68.0, 126.0, 50.0, 61.0, 78.3, 52.0, 28.0, 62.0, 93.0, 72.0, 89.0, 110.0, 89.0, 72.0, 85.1, 58.0, 46.0, 86.0, 48.0, 48.0, 57.0, 84.0, 72.0, 24.0, 62.0, 39.0, 74.0, 62.0, 74.0, 74.0, 70.0, 102.0, 46.0, 57.0, 93.0, 41.0, 99.0, 108.0, 77.0, 45.0, 76.3, 43.0, 88.0, 48.0, 60.0, 24.0, 83.0, 87.0, 41.0, 62.0, 69.0, 66.0, 76.0, 101.0, 43.0, 132.0, 45.0, 77.0, 58.0, 88.0, 58.0, 61.0, 46.0, 93.0, 58.0, 42.0, 85.0, 45.0, 27.0, 76.0, 62.0, 52.0, 39.0], 
  y: [35, 49, 57, 59, 61, 63, 63, 65, 67, 68, 70, 70, 72, 75, 76, 78, 78, 78, 80, 80, 81, 81, 82, 83, 84, 84, 84, 85, 85, 85, 86, 86, 87, 88, 88, 88, 89, 89, 90, 90, 90, 90, 91, 91, 92, 93, 93, 95, 95, 96, 96, 97, 97, 98, 98, 98, 99, 99, 100, 100, 102, 103, 103, 103, 104, 104, 104, 107, 107, 107, 108, 109, 110, 111, 112, 113, 113, 114, 114, 114, 115, 115, 117, 118, 121, 122, 125, 125, 127, 127, 127, 129, 131, 136, 137, 137, 139, 139, 141, 142, 145, 152, 152, 152, 152, 152, 153, 153, 154, 159, 161, 164, 167, 170, 176, 188, 189, 193, 203, 235, 266], 
  marker: {color: '#6264da'}, 
  mode: 'markers', 
  name: 'H', 
  text: ['inconnue rapatriement allemagne a J4', null, 'Decede', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Decede', 'SSR', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Rehospitalise', 'rapprochement familial aix les bains en USC Dr Monnet 0609807373', 'Sortie d hospitalisation', 'SSR', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'reeducation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Decede', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Decede', 'Sortie d hospitalisation', 'reeducation CV', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Hospitalise', 'Decede', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Hospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Sortie d hospitalisation', null, 'reeducation CV', 'sortie d hospitalisation', 'Decede', 'Hospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'SSR', 'rapatriement J5 vers Besancon. duree totale hospitalisation ?', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'reeducation CV', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'transferee hopital d Ales. duree totale hospitalisation ?', 'Sortie d hospitalisation', 'Hospitalise', 'transfert cardio hopital d Ales', 'Sortie d hospitalisation', 'Decede', 'sortie d hospitalisation', 'Rehospitalise', 'Hospitalise', 'rapatriement St Malo Dr Drouet. duree totale hospitalisation ?', 'Hospitalise', 'SSR', 'Hospitalise', 'sortie d hospitalisation', null, 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Decede', 'Sortie d hospitalisation', 'Decede', 'Decede', 'Hospitalise', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'Hospitalise', 'Sortie d hospitalisation', 'Hospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie d hospitalisation', 'Sortie d hospitalisation', 'sortie hospitalisation', 'Hospitalise', 'Decede', null, 'Sortie d hospitalisation', 'Hospitalise', 'reeducation', 'Decede', 'Sortie d hospitalisation', 'Decede', 'Rehospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Hospitalise'], 
  textsrc: 'anchou:49:21bea2', 
  type: 'scatter', 
  xsrc: 'anchou:49:020e5e', 
  ysrc: 'anchou:49:7efc0a'
};
trace2 = {
  x: [31.0, 18.0, 17.0, 33.0, 31.0, 20.0, 15.0, 26.0, 21.0, 24.0, 20.0, 36.0, 34.0, 25.0, 32.0, 25.0, 21.0, 27.0, 22.0, 17.0, 26.0, 23.0, 17.0, 15.0, 14.0, 21.0, 12.0, 32.0, 26.0, 25.0, 31.0, 14.0, 14.0, 15.0, 41.0, 22.0, 22.0, 21.0, 26.0, 22.0, 31.0, 22.0, 25.0, 16.0, 15.0, 19.0, 33.0, 21.0, 24.0, 22.0, 34.0, 20.0, 34.0, 18.0, 41.0, 15.0, 31.0, 23.0, 17.0, 22.0, 15.0, 16.0, 45.0, 23.0, 15.0, 41.0, 34.0, 41.0, 26.0, 38.0, 34.0, 27.0, 34.0, 27.0, 41.0, 27.0, 35.0, 21.0, 16.0, 33.0, 29.0, 29.0, 24.0, 16.0, 25.0, 19.0, 27.0, 34.0, 34.0, 34.0, 29.0, 26.0, 27.0, 18.0, 41.0, 41.0, 48.0, 29.0, 31.0, 20.0, 36.0, 27.0, 26.0, 36.0, 50.0, 29.0, 32.0, 29.0, 28.0, 17.0, 39.0, 25.0, 45.0, 72.0, 62.0, 19.0, 45.0, 58.0], 
  y: [43, 44, 55, 58, 63, 63, 66, 67, 68, 70, 71, 72, 73, 74, 75, 75, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 79, 79, 80, 80, 83, 84, 84, 84, 85, 85, 85, 86, 86, 86, 87, 87, 87, 87, 88, 88, 88, 88, 88, 89, 89, 89, 89, 89, 90, 90, 90, 90, 91, 91, 92, 93, 94, 95, 95, 95, 96, 96, 97, 97, 97, 98, 98, 99, 99, 100, 101, 102, 103, 103, 104, 104, 104, 105, 105, 106, 106, 106, 106, 106, 106, 106, 107, 108, 108, 108, 109, 110, 112, 114, 115, 116, 116, 116, 124, 124, 128, 130, 134, 136, 136, 143, 143, 145, 149, 149, 149, 199], 
  marker: {color: '#cb58b2'}, 
  mode: 'markers', 
  name: 'T', 
  text: ['Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Reeducation Mont Favet', 'Sortie d hospitalisation', 'Hospitalise', 'Hospitalise', 'Rehospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'reeducation CV', 'Decede', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', null, 'Sortie d hospitalisation', 'Sortie d hospitalisation', null, 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Rehospitalise', null, 'Decede', 'Hospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Rehospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', null, 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Rehospitalise', 'Sortie d hospitalisation', null, 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'reeducation CV', 'Sortie d hospitalisation', null, 'Sortie d hospitalisation', 'Sortie d hospitalisation', null, null, 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Rehospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Rehospitalise', 'toujours hospitalise en UMCH puis transfertservice cerebraux leses', 'Sortie d hospitalisation', null, 'Rehospitalise', 'Sortie d hospitalisation', 'Sortie d hospitalisation', 'Hospitalise', 'hospitalise en SSR', null, 'Sortie d hospitalisation', 'Rehospitalise', 'Sortie d hospitalisation', 'Hospitalise', 'Sortie d hospitalisation', 'Decede'], 
  textsrc: 'anchou:49:71cb3e', 
  type: 'scatter', 
  xsrc: 'anchou:49:c54293', 
  ysrc: 'anchou:49:0d13e7'
};
trace3 = {
  x: [24.0, 33.0, 41.0, 24.0, 41.0, 57.0, 38.0, 48.0, 68.0, 25.0, 40.9, 52.0, 31.0, 46.0, 76.0, 89.0, 24.0, 52.0, 88.0, 46.0, 56.0, 50.0, 76.0, 73.0, 63.0, 38.0, 52.0, 117.0, 68.0, 57.0, 64.0, 74.0, 46.0, 72.0, 38.0, 50.4, 78.0, 38.0, 57.9, 46.0, 78.0, 62.0, 88.0, 41.0, 48.0, 38.0, 56.0, 55.0, 68.0, 126.0, 50.0, 61.0, 78.3, 52.0, 28.0, 62.0, 93.0, 72.0, 89.0, 110.0, 89.0, 72.0, 85.1, 58.0, 46.0, 86.0, 48.0, 48.0, 57.0, 84.0, 72.0, 24.0, 62.0, 39.0, 74.0, 62.0, 74.0, 74.0, 70.0, 102.0, 46.0, 57.0, 93.0, 41.0, 99.0, 108.0, 77.0, 45.0, 76.3, 43.0, 88.0, 48.0, 60.0, 24.0, 83.0, 87.0, 41.0, 62.0, 69.0, 66.0, 76.0, 101.0, 43.0, 132.0, 45.0, 77.0, 58.0, 88.0, 58.0, 61.0, 46.0, 93.0, 58.0, 42.0, 85.0, 45.0, 27.0, 76.0, 62.0, 52.0, 39.0], 
  y: [102.062220589, 103.984924697, 105.693995015, 102.062220589, 105.693995015, 109.112135651, 105.053093645, 107.189431543, 111.462107338, 102.275854379, 105.672631636, 108.043966702, 103.557657117, 106.762163963, 113.171177656, 115.948416923, 102.062220589, 108.043966702, 115.734783133, 106.762163963, 108.898501861, 107.616699122, 113.171177656, 112.530276287, 110.393938389, 105.053093645, 108.043966702, 121.930163036, 111.462107338, 109.112135651, 110.607572179, 112.743910076, 106.762163963, 112.316642497, 105.053093645, 107.702152638, 113.598445235, 105.053093645, 109.304406061, 106.762163963, 113.598445235, 110.180304599, 115.734783133, 105.693995015, 107.189431543, 105.053093645, 108.898501861, 108.684868071, 111.462107338, 123.852867144, 107.616699122, 109.96667081, 113.662535372, 108.043966702, 102.916755748, 110.180304599, 116.802952082, 112.316642497, 115.948416923, 120.434726508, 115.948416923, 112.316642497, 115.115245143, 109.32576944, 106.762163963, 115.307515554, 107.189431543, 107.189431543, 109.112135651, 114.880247974, 112.316642497, 102.062220589, 110.180304599, 105.266727435, 112.743910076, 110.180304599, 112.743910076, 112.743910076, 111.889374917, 118.72565619, 106.762163963, 109.112135651, 116.802952082, 105.693995015, 118.08475482, 120.007458928, 113.384811446, 106.548530174, 113.235267793, 106.121262594, 115.734783133, 107.189431543, 109.75303702, 102.062220589, 114.666614184, 115.521149343, 105.693995015, 110.180304599, 111.675741128, 111.034839758, 113.171177656, 118.5120224, 106.121262594, 125.134669882, 106.548530174, 113.384811446, 109.32576944, 115.734783133, 109.32576944, 109.96667081, 106.762163963, 116.802952082, 109.32576944, 105.907628804, 115.093881764, 106.548530174, 102.703121958, 113.171177656, 110.180304599, 108.043966702, 105.266727435], 
  marker: {color: '#6264da'}, 
  mode: 'lines', 
  name: 'Fit for H', 
  type: 'scatter', 
  xsrc: 'anchou:49:020e5e', 
  ysrc: 'anchou:49:281934'
};
trace4 = {
  x: [31.0, 18.0, 17.0, 33.0, 31.0, 20.0, 15.0, 26.0, 21.0, 24.0, 20.0, 36.0, 34.0, 25.0, 32.0, 25.0, 21.0, 27.0, 22.0, 17.0, 26.0, 23.0, 17.0, 15.0, 14.0, 21.0, 12.0, 32.0, 26.0, 25.0, 31.0, 14.0, 14.0, 15.0, 41.0, 22.0, 22.0, 21.0, 26.0, 22.0, 31.0, 22.0, 25.0, 16.0, 15.0, 19.0, 33.0, 21.0, 24.0, 22.0, 34.0, 20.0, 34.0, 18.0, 41.0, 15.0, 31.0, 23.0, 17.0, 22.0, 15.0, 16.0, 45.0, 23.0, 15.0, 41.0, 34.0, 41.0, 26.0, 38.0, 34.0, 27.0, 34.0, 27.0, 41.0, 27.0, 35.0, 21.0, 16.0, 33.0, 29.0, 29.0, 24.0, 16.0, 25.0, 19.0, 27.0, 34.0, 34.0, 34.0, 29.0, 26.0, 27.0, 18.0, 41.0, 41.0, 48.0, 29.0, 31.0, 20.0, 36.0, 27.0, 26.0, 36.0, 50.0, 29.0, 32.0, 29.0, 28.0, 17.0, 39.0, 25.0, 45.0, 72.0, 62.0, 19.0, 45.0, 58.0], 
  y: [99.3495653153, 85.1267542202, 84.0326918282, 101.537690099, 99.3495653153, 87.314879004, 81.8445670444, 93.8792533556, 88.408941396, 91.6911285718, 87.314879004, 104.819877275, 102.631752491, 92.7851909637, 100.443627707, 92.7851909637, 88.408941396, 94.9733157476, 89.5030037879, 84.0326918282, 93.8792533556, 90.5970661798, 84.0326918282, 81.8445670444, 80.7505046525, 88.408941396, 78.5623798686, 100.443627707, 93.8792533556, 92.7851909637, 99.3495653153, 80.7505046525, 80.7505046525, 81.8445670444, 110.290189235, 89.5030037879, 89.5030037879, 88.408941396, 93.8792533556, 89.5030037879, 99.3495653153, 89.5030037879, 92.7851909637, 82.9386294363, 81.8445670444, 86.2208166121, 101.537690099, 88.408941396, 91.6911285718, 89.5030037879, 102.631752491, 87.314879004, 102.631752491, 85.1267542202, 110.290189235, 81.8445670444, 99.3495653153, 90.5970661798, 84.0326918282, 89.5030037879, 81.8445670444, 82.9386294363, 114.666438802, 90.5970661798, 81.8445670444, 110.290189235, 102.631752491, 110.290189235, 93.8792533556, 107.008002059, 102.631752491, 94.9733157476, 102.631752491, 94.9733157476, 110.290189235, 94.9733157476, 103.725814883, 88.408941396, 82.9386294363, 101.537690099, 97.1614405314, 97.1614405314, 91.6911285718, 82.9386294363, 92.7851909637, 86.2208166121, 94.9733157476, 102.631752491, 102.631752491, 102.631752491, 97.1614405314, 93.8792533556, 94.9733157476, 85.1267542202, 110.290189235, 110.290189235, 117.948625978, 97.1614405314, 99.3495653153, 87.314879004, 104.819877275, 94.9733157476, 93.8792533556, 104.819877275, 120.136750762, 97.1614405314, 100.443627707, 97.1614405314, 96.0673781395, 84.0326918282, 108.102064451, 92.7851909637, 114.666438802, 144.206123385, 133.265499465, 86.2208166121, 114.666438802, 128.889249897], 
  marker: {color: '#cb58b2'}, 
  mode: 'lines', 
  name: 'Fit for T', 
  type: 'scatter', 
  xsrc: 'anchou:49:c54293', 
  ysrc: 'anchou:49:86a480'
};
data = [trace1, trace2, trace3, trace4];
layout = {
  hovermode: 'closest', 
  legend: {
    font: {size: 10}, 
    xanchor: 'right', 
    yanchor: 'middle'
  }, 
  title: 'out-of-hospital-time_vs_travel-distance', 
  xaxis: {
    gridwidth: 2, 
    ticklen: 5, 
    title: 'travel distnace (km)', 
    zeroline: false
  }, 
  yaxis: {
    gridwidth: 2, 
    ticklen: 5, 
    title: 'out-of-hospital-time (min)'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});