import { useRouter } from "next/router";
import { useState, type ReactElement, useEffect } from "react";


// ============ Layout ============
import AppLayout from "@/components/layout/layout";


// ============ Components ============
import Page from "@/components/page";
import AppLoading from "@/components/loading";


// ============ Utils ============
import { HOME_PAGE_TITLE } from "@/utils/page-info";




// =====================================================================================================
export default function Index() {


  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    router.push('/home');
  }, [router])

  if (isLoading) return <AppLoading />;


  return (
    <Page title={HOME_PAGE_TITLE}>
      <div className="h-full">
        <div className="relative"></div>
      </div>
    </Page>
  );
}


Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout title={HOME_PAGE_TITLE}>{page}</AppLayout>
  )
}
