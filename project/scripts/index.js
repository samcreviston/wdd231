const campaignsUrl = "./data/campaigns.json";
const campaignSection = document.getElementById('campaign-list');
const compactToggle = document.getElementById("compact-checkbox");

//extract campaing data from json
async function getcampaignData() {
    const response = await fetch(campaignsUrl);
    const campaigns = await response.json();
    console.log(campaigns)
    return campaigns;


  }

  async function displayCompactCampaigns() {
    const campaigns = await getcampaignData();

    campaignSection.innerHTML = "";

    campaigns.forEach(campaign => {
        //create variables for each item in the campaign
        const name = campaign.name;
        const description = campaign.description;
        const averageStartPartyLevel = campaign.averageStartPartyLevel;
        const averagePartySize = campaign.averagePartySize;
        const adventureCount = campaign.adventureCount;

        //create and populate a DOM element for each variable
        const campaignCard = document.createElement('div');
        campaignCard.className = 'compact-campaign-card';

        const campaignNameElement = document.createElement('h2');
        campaignNameElement.textContent = name;
        campaignNameElement.className = 'campaign-name';
        campaignCard.appendChild(campaignNameElement);

        const campaignDescriptionElement = document.createElement('p');
        campaignDescriptionElement.textContent = description;
        campaignDescriptionElement.className = 'campaign-description';
        campaignCard.appendChild(campaignDescriptionElement);

        const campaignStatsElement = document.createElement('ul');
        campaignCard.appendChild(campaignStatsElement);

        const averageStartPartyLevelElement = document.createElement('li');
        averageStartPartyLevelElement.textContent = `Average Start Party Level: ${averageStartPartyLevel}`;
        campaignStatsElement.appendChild(averageStartPartyLevelElement);

        const averagePartySizeElement = document.createElement('li');
        averagePartySizeElement.textContent = `Average Party Size: ${averagePartySize}`;
        campaignStatsElement.appendChild(averagePartySizeElement);

        const adventureCountElement = document.createElement('li');
        adventureCountElement.textContent = `Number of Adventures: ${adventureCount}`;
        campaignStatsElement.appendChild(adventureCountElement);

        //append the campaign section card to the #campaign-list section in main
        campaignSection.appendChild(campaignCard);
    });
}

async function displayFullCampaigns() {
    const campaigns = await getcampaignData();

    campaignSection.innerHTML = "";

    campaigns.forEach(campaign => {
        //create variables for each item in the campaign
        const name = campaign.name;
        const description = campaign.description;
        const averageStartPartyLevel = campaign.averageStartPartyLevel;
        const averagePartySize = campaign.averagePartySize;
        const adventureCount = campaign.adventureCount;

        //create and populate a DOM element for each variable
        const campaignCard = document.createElement('div');
        campaignCard.className = 'full-campaign-card';

        const campaignNameElement = document.createElement('h2');
        campaignNameElement.textContent = name;
        campaignNameElement.className = 'campaign-name';
        campaignCard.appendChild(campaignNameElement);

        const campaignDescriptionElement = document.createElement('p');
        campaignDescriptionElement.textContent = description;
        campaignDescriptionElement.className = 'campaign-description';
        campaignCard.appendChild(campaignDescriptionElement);

        const campaignStatsElement = document.createElement('ul');
        campaignCard.appendChild(campaignStatsElement);

        const averageStartPartyLevelElement = document.createElement('li');
        averageStartPartyLevelElement.textContent = `Average Start Party Level: ${averageStartPartyLevel}`;
        campaignStatsElement.appendChild(averageStartPartyLevelElement);

        const averagePartySizeElement = document.createElement('li');
        averagePartySizeElement.textContent = `Average Party Size: ${averagePartySize}`;
        campaignStatsElement.appendChild(averagePartySizeElement);

        const adventureCountElement = document.createElement('li');
        adventureCountElement.textContent = `Number of Adventures: ${adventureCount}`;
        campaignStatsElement.appendChild(adventureCountElement);

        //append the campaign section card to the #campaign-list section in main
        campaignSection.appendChild(campaignCard);
    });
}

function toggleSwitch() {
    if (document.getElementById("compact-checkbox").checked) {
        displayCompactCampaigns();
    } else {
        displayFullCampaigns();
    }
}

displayFullCampaigns();