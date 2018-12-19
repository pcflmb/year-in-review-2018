// POLYFILLS
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      return this.substr(position || 0, searchString.length) === searchString;
  };
}

var yearEvents = [
  // each event will be represented by an array with the following order:
  // [start_day, end_day, start_lat_lon, end_lat_lon, path_color, text, photos_url_list]
    
  // start in RWC
  [-100, -100, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "", []],
  [-10, 5, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "We spent new years relaxing in RWC with friends", [
    '/img/newyears/IMG_8361.JPG', '/img/newyears/IMG_8364.jpeg', '/img/newyears/IMG_8367.jpeg', '/img/newyears/IMG_8581.JPG', '/img/newyears/prep_for_wine_party.jpg', '/img/newyears/BNL_0039.JPG', 
  ]],

  // Lauren Birthday
  [5, 15, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "For Lauren's birthday we went to a speakeasy theater after dinner on the water", [
    '/img/speakeasy/IMG_8606.JPG', '/img/speakeasy/good_1.jpg', '/img/speakeasy/costume_1.jpg', '/img/speakeasy/costume_2.jpg', '/img/speakeasy/inside_1.jpg', '/img/speakeasy/speakeasy_pt2.jpg', 
  ]],

  // visit Oliver & Alyse - ???
  [18, 24, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "Then we headed down to San Diego to visit some friends", [
    '/img/alyseolivervisit/IMG_0078.jpeg', '/img/alyseolivervisit/IMG_0068.jpeg', '/img/alyseolivervisit/IMG_0086.jpeg', 
  ]],
  [24, 30, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "Then we headed down to San Diego to visit some friends", [
    '/img/alyseolivervisit/IMG_0078.jpeg', '/img/alyseolivervisit/IMG_0068.jpeg', '/img/alyseolivervisit/IMG_0086.jpeg', 
  ]],
  [30, 36, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "Then we headed down to San Diego to visit some friends", [
    '/img/alyseolivervisit/IMG_0078.jpeg', '/img/alyseolivervisit/IMG_0068.jpeg', '/img/alyseolivervisit/IMG_0086.jpeg', 
  ]],

  // ski in feb
  [36, 42, [-122.2364, 37.4852], [-120.1210934, 39.2745678], null, "After a few big snow storms we went skiing in Tahoe", [
    '/img/skiing/0.jpg', '/img/skiing/1.jpg', '/img/skiing/2.jpg', '/img/skiing/3.jpg', '/img/skiing/4.jpg',
  ]],
  [42, 50, [-120.1210934, 39.2745678], [-120.1210934, 39.2745678], null, "After a few big snow storms we went skiing in Tahoe", [
    '/img/skiing/0.jpg', '/img/skiing/1.jpg', '/img/skiing/2.jpg', '/img/skiing/3.jpg', '/img/skiing/4.jpg',
  ]],
  [50, 56, [-120.1210934, 39.2745678], [-122.2364, 37.4852], null, "After a few big snow storms we went skiing in Tahoe", [
    '/img/skiing/0.jpg', '/img/skiing/1.jpg', '/img/skiing/2.jpg', '/img/skiing/3.jpg', '/img/skiing/4.jpg',
  ]],

  // house search
  [60, 90, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "The next few months we were busy with our house hunt", []],

  // easter with Jeff & family - April 1
  [90, 99, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "Easter with the family", [
    '/img/easter/IMG_0298.jpeg', '/img/easter/IMG_0282.jpeg', '/img/easter/IMG_0284.JPG', '/img/easter/IMG_0281.JPG', 
  ]],

  // wine tasting weekend - memorial day weekend???
  [135, 145, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "We spent memorial day weekend wine tasting in Sonoma", [
    '/img/maywinetaste/BNL_0046.JPG', '/img/maywinetaste/IMG_0754.jpeg', '/img/maywinetaste/IMG_0756.jpeg', '/img/maywinetaste/IMG_0762.jpeg', '/img/maywinetaste/IMG_0766.jpeg', '/img/maywinetaste/IMG_0767.jpeg', '/img/maywinetaste/IMG_0782.jpeg', '/img/maywinetaste/IMG_0785.jpeg', '/img/maywinetaste/IMG_0788.jpeg', '/img/maywinetaste/IMG_0790.jpeg', '/img/maywinetaste/IMG_0792.jpeg', '/img/maywinetaste/IMG_0797.jpeg', '/img/maywinetaste/IMG_0802.jpeg', '/img/maywinetaste/IMG_0804.jpeg', '/img/maywinetaste/IMG_0809.jpeg', 
  ]],

  // oliver & alyse wedding - ??
  [150, 161, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "A few weeks later, we partied with Alyse and Oliver at their wedding!", [
    '/img/alyseoliverwedding/IMG_0935.jpeg', '/img/alyseoliverwedding/IMG_0936.jpeg', '/img/alyseoliverwedding/IMG_0948.JPG', '/img/alyseoliverwedding/wings.jpg', '/img/alyseoliverwedding/IMG_0978.jpeg', '/img/alyseoliverwedding/IMG_0985.jpeg', '/img/alyseoliverwedding/IMG_0998.jpeg', '/img/alyseoliverwedding/IMG_1053.JPG',
  ]],

  // verve tournament in Tahoe
  [165, 175, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "Then we roadtripped to Tahoe to coach a lacrosse tournament", [
    '/img/vervetournament/IMG_1093.jpeg', '/img/vervetournament/IMG_1076.jpeg', '/img/vervetournament/IMG_1080.jpeg',
  ]],

  // 4th of July in Fremont - 4th July
  [178, 189, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "We celebrated the 4th of July 🇺🇸", [
    '/img/4thjuly/IMG_1253.jpeg', '/img/4thjuly/IMG_1257.jpeg', '/img/4thjuly/IMG_1311.jpeg', '/img/4thjuly/IMG_1320.jpeg', 
  ]],

  // bastille day - 
  [189, 196, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "Then we celebrated Bastille day in Sonoma", [
    '/img/bastilleday/IMG_1405.jpeg', '/img/bastilleday/IMG_1415.jpeg', '/img/bastilleday/IMG_1419.jpeg', 
  ]],
  
  // bought our home!!! - middle of July
  [196, 203, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "We officialy purchased on our new home in Pacifica!", [
    '/img/newhome/IMG_1422.PNG', '/img/newhome/IMG_1423.PNG', '/img/newhome/IMG_1424.PNG', '/img/newhome/IMG_1425.PNG', '/img/newhome/IMG_1426.PNG', '/img/newhome/IMG_1430.PNG', '/img/newhome/IMG_1431.PNG', '/img/newhome/IMG_1432.PNG', '/img/newhome/IMG_1433.PNG', '/img/newhome/IMG_1434.PNG', '/img/newhome/IMG_1435.PNG', '/img/newhome/IMG_1436.PNG', '/img/newhome/IMG_1437.PNG', '/img/newhome/IMG_1438.PNG', '/img/newhome/IMG_1439.PNG', '/img/newhome/IMG_1440.PNG', '/img/newhome/IMG_1441.PNG', '/img/newhome/IMG_1442.PNG', '/img/newhome/IMG_1443.PNG', '/img/newhome/IMG_1444.PNG', '/img/newhome/IMG_1445.PNG', '/img/newhome/IMG_1720.jpeg', '/img/newhome/IMG_1725.jpeg', '/img/newhome/polar.jpg', 
  ]],

  // floating in Tahoe - end of July
  [203, 215, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "To finish the summer strong, we went floating down the Tahoe river", [
    '/img/floating/0.JPG', '/img/floating/IMG_0001.JPG', '/img/floating/IMG_0018.JPG', '/img/floating/IMG_0029.jpeg', '/img/floating/IMG_0031.JPG', '/img/floating/IMG_0038.JPG', '/img/floating/IMG_0043.JPG', '/img/floating/IMG_0047.JPG', '/img/floating/IMG_0052.JPG', '/img/floating/IMG_1459.jpeg', '/img/floating/IMG_1477.jpeg', 
  ]],

  // camping with the Perry's - early Sept??
  [215, 225, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "...and went camping a few weeks later in Soda Springs", [
    '/img/camping/IMG_1597.jpeg', '/img/camping/forest.jpg', '/img/camping/IMG_1600.jpeg', '/img/camping/IMG_1607.jpeg', '/img/camping/IMG_1613.jpeg', '/img/camping/IMG_1632.jpeg', '/img/camping/IMG_1645.jpeg', '/img/camping/IMG_1657.jpeg', '/img/camping/IMG_1674.jpeg', 
  ]],

  // chris & aaron engagement party
  [230, 240, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "To start the fall, we celebrated with Chris & Aaron at their engagement party", [
    
  ]],

  // Karen & Alejandro wedding - Sept 8
  [250, 260, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "We celebrated the wedding of Karen & Alejandro", [

  ]],

  // Molly's dirth thirty - Tough Mudder - early Oct
  [275, 285, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "For Molly's 30th birthday, we joined her in a Tough Mudder race!", [

  ]],

  // pumpking festival
  [285, 295, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "Half Moon Bay hosted the annual Pumpkin Festival", [

  ]],

  // Lauren -> Alabama
  [295, 305, [-122.2364, 37.4852], [-122.2364, 37.4852], "#e23434", "Lauren went to Alabama with Aaron and some of her other bridesmaids<br>&nbsp;", [

  ]],

  // Brendan -> Las Vegas
  [295, 305, [-122.2364, 37.4852], [-122.2364, 37.4852], "#0e3374", "&nbsp;<br>Brendan went to Las Vegas with Chris", [

  ]],

  // halloween!
  [305, 308, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "We had our first Halloween at the new home", [

  ]],

  // housewarming party - beginning of November
  [308, 320, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "Our housewarming party was so much fun! It was an Oyster & Rose Soiree", [

  ]],

  // Thanksgiving

  // Brendan birthday Wine & Karaoke

  // ???
]

var DAYS_IN_YEAR = 365

function buildTimeline (timelineDiv, totalWidth) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    timelineDiv.style.width = totalWidth + 'px'
    var divWidth = (totalWidth - (months.length + 1)) / months.length
    for (m in months) {
        var month = months[m]
        // create month div element
        var monthDiv = document.createElement("div")
        monthDiv.style.width = divWidth + 'px'
        monthDiv.className = 'timeline-month'
        if (month !== months[0])
            monthDiv.style.marginLeft = -1 + 'px'
        monthDiv.innerText = month

        timelineDiv.appendChild(monthDiv)
    }
    // add events to the timeline as well
    for (e in yearEvents) {
        var yearEvent = yearEvents[e]
        var startDay = yearEvent[0],
            endDay = yearEvent[1],
            origin = yearEvent[2],
            destination = yearEvent[3],
            color = yearEvent[4]
        if (endDay <= 0 || (origin[0] === destination[0] && origin[1] === destination[1])) {
            // don't show events prior to the start of the year or events that start and end in the same location
            continue
        }
        var eventTimelineDiv = document.createElement("div")
        eventTimelineDiv.className = 'timeline-event'
        eventTimelineDiv.style.width = ((endDay - Math.max(startDay, 0)) / DAYS_IN_YEAR * totalWidth) + 'px'
        if (color !== null) {
            // eventTimelineDiv.style.borderColor = color
            eventTimelineDiv.style.backgroundColor = color + '33'  // set alpha channel to 0.2
        }
        eventTimelineDiv.style.left = (Math.max(startDay, 0) / DAYS_IN_YEAR * totalWidth) + 'px'
        timelineDiv.appendChild(eventTimelineDiv)
    }
}

// magic constants... taken from http://www.tnoda.com/flightanimation
var mapWidth = 938
var mapHeight = 620

function setupWorldMap (fixedDiv) {
    var fullWidth = window.innerWidth

    var projection = d3.geo.mercator()
        .rotate([110, 0])
        .scale(150)
        .translate([mapWidth / 2, mapHeight / 1.5])

    var path = d3.geo.path()
        .projection(projection)

    var svg = d3.select("#map").append("svg")
        .attr("preserveAspectRatio", "xMidYMid")
        .attr("viewBox", "0 0 " + mapWidth + " " + mapHeight)
        .attr("width", fullWidth)
        .attr("height", fullWidth * mapHeight / mapWidth)

    svg.append("rect")
        .attr("class", "background")
        .attr("width", mapWidth)
        .attr("height", mapHeight)

    var g = svg.append("g")
    d3.json("./data/countries.topo.json", function(error, topo) {
        g.append("g")
            .attr("id", "countries")
            .selectAll("path")
            .data(topojson.feature(topo, topo.objects.countries).features)
            .enter()
            .append("path")
            .attr("id", function (d) { return d.id } )
            .attr("d", path)
    })

    d3.json("./data/states.topo.json", function(error, topo) {
        g.append("g")
            .attr("id", "states")
            .selectAll("path")
            .data(topojson.feature(topo, topo.objects.states).features)
            .enter()
            .append("path")
            .attr("id", function (d) { return d.id } )
            .attr("d", path)
    })

    var galleriesDiv = document.getElementById("galleries")

    var i = 0
    for (e in yearEvents) {
        var yearEvent = yearEvents[e]
        // create SVG route
        var origin = yearEvent[2],
            destination = yearEvent[3]
        if (origin === null) {
            yearEvent.push(null)
            continue
        }
        var pathId = "travelpath" + i
        svg.append("path")
            .datum({type: "LineString", coordinates: [origin, destination]})
            .attr("class", "route")
            .attr("id", pathId)
            .attr("d", path)
        var routeDiv = document.getElementById(pathId)
        var strokeColor = yearEvent[4]
        if (strokeColor !== null) {
            routeDiv.style.stroke = strokeColor
        }
        var length = routeDiv.getTotalLength()
        routeDiv.style.strokeDasharray = length + ' ' + length
        routeDiv.style.strokeDashoffset = length

        // create text span
        var eventTextDiv = document.createElement("span")
        eventTextDiv.className = "event-text"
        eventTextDiv.innerHTML = yearEvent[5]
        fixedDiv.appendChild(eventTextDiv)

        // create location marker
        // add circles to svg
        var destinationId = "destination" + i
        svg.append("circle")
            .attr("cx", projection(destination)[0] )
            .attr("cy", projection(destination)[1] )
            .attr("r", "3")
            .attr("class", "destination-marker")
            .attr("id", destinationId)
        var destinationMarkerCircle = document.getElementById(destinationId)

        // create images gallery
        var tooltipDiv = null
        if (yearEvent[6].length > 0) {
            // generate the gallery
            var galleryId = 'gallery' + i
            for (d in yearEvent[6]) {
                var imageData = yearEvent[6][d]
                var imageURL = imageData
                var imageTitle = null
                if (Array.isArray(imageData)) {
                    imageURL = imageData[0]
                    imageTitle = imageData[1]
                }
                var galleryImgA = document.createElement('a')
                imageURL = imageURL.startsWith('http') ? imageURL : (window.location.protocol + '//' + window.location.host + imageURL)
                galleryImgA.href = imageURL
                if (imageTitle !== null) {
                    galleryImgA.title = imageTitle
                }
                galleryImgA.className = galleryId
                galleriesDiv.appendChild(galleryImgA)
            }
            // create a tooltip to point to the active location
            tooltipDiv = document.createElement("div")
            tooltipDiv.className = 'tooltip'
            tooltipDiv.innerHTML = 'Click for photos &nbsp;➡'
            galleriesDiv.appendChild(tooltipDiv)
            // add event listeners to display the gallery
            var galleryListener = halkaBox.run(galleryId)(0)
            eventTextDiv.addEventListener('click', galleryListener)
            destinationMarkerCircle.addEventListener('click', galleryListener)
            tooltipDiv.addEventListener('click', galleryListener)
        }

        // store the route div and event text div elements at the end of the event array
        yearEvent.push({route: routeDiv, text: eventTextDiv, marker: destinationMarkerCircle, tooltip: tooltipDiv})

        // increment counter
        i += 1
    }

    return [projection, path, svg, g]
}

function registerListener (event, func) {
    window.addEventListener(event, func)
    func()
}

function updateTimelinePosition (timelineDiv, scrollPercent, timelineLength) {
    // start at 50% of the screen width, move left timelineLength pixels based on percent
    timelineDiv.style.left = ((window.innerWidth / 2) - (scrollPercent * timelineLength)) + 'px'
}

function updateRouteHighlights (scrollPercent) {
    // convert scroll percentage into a day number
    var dayNum = scrollPercent * DAYS_IN_YEAR
    for (e in yearEvents) {
        var yearEvent = yearEvents[e]
        var startDay = yearEvent[0],
            endDay = yearEvent[1]
        var route = yearEvent[yearEvent.length - 1].route
        if (route === null) continue
        var length = route.getTotalLength()
        var percentCompleted = Math.min(Math.max((endDay - dayNum) / (endDay - startDay), -1), 1)  // clamp between [-1,1]
        // starts at (length) and goes to (0)
        route.style.strokeDashoffset = percentCompleted * length
    }
}

function updateEventText (scrollPercent) {
    // convert scroll percentage into a day number
    var dayNum = scrollPercent * DAYS_IN_YEAR
    var i = 0
    for (e in yearEvents) {
        var yearEvent = yearEvents[e]
        var startDay = yearEvent[0],
            endDay = yearEvent[1]
        var eventTextDiv = yearEvent[yearEvent.length - 1].text
        // find the end day for this text
        var j = 1
        while (i + j < yearEvents.length) {
            var evt = yearEvents[i + j]
            if (evt[evt.length - 1].text.innerText !== eventTextDiv.innerText) {
                break
            } else {
                endDay = evt[1]
            }
            j += 1
        }
        // display or hide the event text
        var prevEvent = yearEvents[i - 1]
        if (dayNum >= startDay && dayNum <= endDay && prevEvent && prevEvent[prevEvent.length - 1].text.innerText !== eventTextDiv.innerText) {
            eventTextDiv.className = 'event-text active'
        } else {
            eventTextDiv.className = 'event-text'
        }
        i += 1
    }
}

function setCircleClass (destinationMarkerCircle, classes) {
    var userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') >= 0 || userAgent.indexOf('MSIE') >= 0 || userAgent.indexOf('rv:') >= 0) {
        destinationMarkerCircle.className["baseVal"] = classes
    } else {
        destinationMarkerCircle.classList = [classes]
    }
}

function updateDestinationMarker (scrollPercent) {
    // convert scroll percentage into a day number
    var dayNum = scrollPercent * DAYS_IN_YEAR
    var lastActive = null
    var lastTooltip = null
    for (e in yearEvents) {
        var yearEvent = yearEvents[e]
        var startDay = yearEvent[0],
            endDay = yearEvent[1]
        var destinationMarkerCircle = yearEvent[yearEvent.length - 1].marker
        var tooltipDiv = yearEvent[yearEvent.length - 1].tooltip
        if (dayNum >= startDay) {
            setCircleClass(destinationMarkerCircle, 'destination-marker active')
            lastActive = destinationMarkerCircle
            if (lastTooltip !== null) {
                // hide old tooltips
                lastTooltip.style.display = 'none'
            }
            lastTooltip = tooltipDiv
        } else {
            setCircleClass(destinationMarkerCircle, 'destination-marker')
            if (tooltipDiv !== null) {
                tooltipDiv.style.display = 'none'
            }
        }
    }
    if (lastActive !== null) {
        setCircleClass(lastActive, 'destination-marker active most-recent')
        if (lastTooltip !== null) {
            // set tooltip position
            var markerLocation = lastActive.getBoundingClientRect()
            lastTooltip.style.display = 'block'
            lastTooltip.style.left = (markerLocation.left + markerLocation.width / 2) + 'px'
            lastTooltip.style.top = (markerLocation.top + markerLocation.height / 2 - 38) + 'px'
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Remove "no-js" class from <html> tag
    document.body.parentNode.className = ''

    var scrollLength = 20000
    var initialTextHeight = 600
    var timelineLength = 5000
    var contentDiv = document.getElementById("content")
    var fixedDiv = document.getElementById("fixed")
    var timelineDiv = document.getElementById("timeline")
    var mapDiv = document.getElementById("map")
    var scrollPercent = 0

    // setup UI
    buildTimeline(timelineDiv, timelineLength)
    var worldMap = setupWorldMap(fixedDiv)
    var mapProjection = worldMap[0],
        mapPath = worldMap[1],
        mapSVG = worldMap[2],
        mapG = worldMap[3]
    document.getElementById("initial-text").style.height = initialTextHeight

    var renderInProgress = false
    var render = function () {
        // lock
        if (renderInProgress)
            return
        renderInProgress = true

        // do render
        scrollPercent = Math.min((window.pageYOffset - initialTextHeight) / scrollLength, 1)
        // fixedDiv.innerText = (scrollPercent * 100) + '%'
        updateTimelinePosition(timelineDiv, scrollPercent, timelineLength)
        updateRouteHighlights(scrollPercent)
        updateEventText(scrollPercent)
        updateDestinationMarker(scrollPercent)

        // unlock
        renderInProgress = false
    }
    registerListener('scroll', render)

    var updateContentDivHeight = function () {
        // update content div length
        contentDiv.style.height = (window.innerHeight + initialTextHeight + scrollLength) + 'px'
        // update map location
        var w = mapDiv.clientWidth
        var h = mapDiv.clientHeight
        var svgHeight = w * mapHeight / mapWidth
        mapSVG.attr("width", w)
        mapSVG.attr("height", svgHeight)
        mapSVG.attr("style", "margin-top: -" + ((svgHeight - h) / 2) + 'px')
        // re-render
        render()
    }
    registerListener('resize', updateContentDivHeight)

})
