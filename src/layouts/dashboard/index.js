// @mui material components
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
// import Icon from "@mui/material/Icon";
// import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
// import VuiTypography from "components/VuiTypography";
// import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
// import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
// import Projects from "layouts/dashboard/components/Projects";
// import OrderOverview from "layouts/dashboard/components/OrderOverview";
// import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
// import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
// import { IoIosRocket } from "react-icons/io";
// import { IoGlobe } from "react-icons/io5";
// import { IoBuild } from "react-icons/io5";
// import { IoInvertMode } from "react-icons/io5";
// import { FaCircleDollarToSlot } from "react-icons/fa6";
// import { HiMiniArrowsUpDown } from "react-icons/hi2";
// import { IoDocumentText } from "react-icons/io5";
// import { FaShoppingCart } from "react-icons/fa";

// Data
// import LineChart from "examples/Charts/LineCharts/LineChart";
// import BarChart from "examples/Charts/BarCharts/BarChart";
// import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
// import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
// import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
// import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import './index.css';
import Coinflip from '../../assets/images/coinflip.png';
import Slot from '../../assets/images/slot.png';
import Plinko from '../../assets/images/plinko.png';

function Dashboard() {
  // const { gradients } = colors;
  // const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container display="block" spacing={3}>
            <Grid item xs={12} >
              <Link to="/coinflip">
                <MiniStatisticsCard
                  sx={{'& > div > div > div.MuiGrid-container' : {justifyContent: "space-between"} }}
                  title={{ text: "TG Casino", fontWeight: "regular" }}
                  count="CoinFlip"
                  
                  // percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "info", component: <img src={Coinflip} width="22px" height="22px"/> }}
                />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/slot">
                <MiniStatisticsCard
                  title={{ text: "TG Casino", fontWeight: "regular" }}
                  count="Slot"
                  // percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "info", component: <img src={Slot} width="22px" height="22px"/> }}
                />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/plinko">
                <MiniStatisticsCard
                  title={{ text: "TG Casino", fontWeight: "regular" }}
                  count="Plinko"
                  // percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "info", component: <img src={Plinko} width="22px" height="22px"/> }}
                />
              </Link>
            </Grid>
          </Grid>
        </VuiBox>

        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12}>
              <WelcomeMark />
            </Grid>
            {/* <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid> */}
          </Grid>
        </VuiBox>
        {/* <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={7}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Sales Overview
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={5}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Active Users
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      (+23){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than last week
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoInvertMode color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Users
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        32,984
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoIosRocket color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Clicks
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,42M
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaShoppingCart color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Sales
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,400$
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoBuild color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Items
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        320
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid> */}

      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
