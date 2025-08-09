import { OrganizationList } from "@clerk/nextjs";

export function OrgSelectionView() {
  return (
    <OrganizationList
      afterSelectOrganizationUrl='/'
      afterCreateOrganizationUrl='/'
      hidePersonal
      skipInvitationScreen
    />
  )
}