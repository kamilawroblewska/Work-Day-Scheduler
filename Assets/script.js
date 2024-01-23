// Linked html
$(document).ready(function () {
  // Display current day
  const currentDay = $("#currentDay");

  const rightNow = dayjs().format("dddd, MMMM DD");
  currentDay.text(rightNow);

  // Present time blocks (9am-5pm)
  const timeBlocks = [
    {
      id: "hour9am",
      time: dayjs().hour(9),
      event: "",
    },
    {
      id: "hour10am",
      time: dayjs().hour(10),
      event: "",
    },
    {
      id: "hour11am",
      time: dayjs().hour(11),
      event: "",
    },
    {
      id: "hour12pm",
      time: dayjs().hour(12),
      event: "",
    },
    {
      id: "hour1pm",
      time: dayjs().hour(13),
      event: "",
    },
    {
      id: "hour2pm",
      time: dayjs().hour(14),
      event: "",
    },
    {
      id: "hour3pm",
      time: dayjs().hour(15),
      event: "",
    },
    {
      id: "hour4pm",
      time: dayjs().hour(16),
      event: "",
    },
    {
      id: "hour5pm",
      time: dayjs().hour(17),
      event: "",
    },
  ];

  function drawTimeBlocks() {
    const container = $("#timeBlocksContainer");

    timeBlocks.forEach((timeBlock) => {
      const timeBlockHTML = `
          
          <div class="container">
            <div id="${timeBlock.id}" class="row time-block"> 
              <div class="col-md-1 hour">${timeBlock.time.format("hA")}</div>
              <textarea class="col description">${timeBlock.event}</textarea>
              <button class="col-md-1 saveBtn">Save</button>
            </div>
          </div>
        `;

      container.append(timeBlockHTML);
    });
  }

  drawTimeBlocks();
  /* Coloring blocks */
  const now = dayjs().format("hA");
  const sample = dayjs();
  timeBlocks.forEach(function (value) {
    const presentEl = $("#" + value.id);
    console.log(value.time.diff(sample));
    if (now == value.time.format("hA")) {
      presentEl.addClass("present");
    } else if (value.time.diff(sample) <= 0) {
      presentEl.addClass("past");
    } else {
      presentEl.addClass("future");
    }
  });
});
