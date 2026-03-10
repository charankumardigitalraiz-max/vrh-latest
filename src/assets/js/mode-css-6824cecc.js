<?php /*Template Name: Humán erőforrás menedzsment */ ?>
<?php get_header(); ?>

<!-- LOADER -->	
<div id="loader-overflow">
			<div id="loader3" class="loader-cont">Please enable JS</div>
		</div>	
		
		<div id="wrap" class="boxed ">
			<div class="grey-bg">
				
				<div class="header-black-bg"></div>								
				
                <section class="page-title-cont page-title-large2-cont bg-gray30">
					<div class="relative container align-left">
						<div class="row">
							
							<div class="col-md-6">
								<h1 class="page-title2">Szolgáltatások</h1>
							</div>
							
							<div class="col-md-6">
							<div class="breadcrumbs breadcrumbs2 font-poppins" typeof="BreadcrumbList" vocab="http://schema.org/">
									<?php if(function_exists('bcn_display'))
									{
										bcn_display();
									}?>
								</div>
							</div>
							
						</div>
					</div>
				</section>
				
				
				<section class="page-section bg-10 clearfix">
					<div class="fes7-img-cont col-md-5">
						<div class="fes7-img" style="background-image: url(<?php echo get_field('human_eroforras_menedzsment_tanacsadas_kep')['url']; ?>)"></div>
					</div>
					
					<div class="container">
						<div class="row">
							<div class="col-md-6 col-md-offset-6 fes7-text-cont p-80-cont">
								<h1 class="h4"><span class="color-beige"><?php the_field('human_eroforras_menedzsment_tanacsadas_cim'); ?></span></h1>
								<p class=""><?php the_field('human_eroforras_menedzsment_tanacsadas_tartalom'); ?></p>
								
							</div>
						</div><!--end of row-->
					</div>
				</section> 
				
				<section id="about" class="page-section bg-gray5">
					<div class="container fes1-cont">
						<div class="row">
							
							<div class="col-md-12">
								
								<div class="row">
									<div class="col-md-12">
										<div class="fes1-main-title-cont wow fadeInDown">
											<div class="fes1-box wow fadeIn">
												<h4><?php the_field('megoldasain_felirat'); ?></h4>
											</div>
										</div>
									</div>
								</div>
								
								<?php
								$counter = 0;
								if( have_rows('human_eroforras_menedzsment_tanacsadas_felsorolas') ): 
								while ( have_rows('human_eroforras_menedzsment_tanacsadas_felsorolas') ) : the_row(); 
								if($counter === 0 || $counter === 3 || $counter === 6 || $counter === 9){
								?>
								<div class="row">
								<?php } ?>
									<div class="col-md-4 col-sm-4">
										<div class="fes1-box wow fadeIn" >
											<div class="fes7-box-icon">
												<div class="icon icon-arrows-right-double-31 color-beige"></div>
											</div>
											<h3><?php echo the_sub_field('felsorolas');?> 
											<?php if(get_sub_field('megjegyzesek') != "") {?>
												<a type="button" class="" data-toggle="tooltip" data-placement="top" title="" data-original-title="<?php echo the_sub_field('megjegyzesek');?>"><i class="fa fa-info-circle"></i></a>
											<?php }?>
											</h3>
											<?php if( have_rows('alfelsorolas') ): 
												while ( have_rows('alfelsorolas') ) : the_row();  ?>
												<ul class="icon-list felsorolas fa-ul">
													<li><i class="fa fa-angle-double-right color-red"></i><?php echo the_sub_field('alfelsorolasok');?></li>
												</ul>
												<?php endwhile; endif; ?>
										</div>
									</div>
								<?php	if($counter === 2 || $counter === 5 || $counter === 8){
								?>
									</div>
								<?php } $counter++;?>
								<?php endwhile; endif; ?>
							</div>
								</div>
					</div>
				</section>	
			
			
			<section class="container-fluid p-110-cont bg-beige">
                <?php get_template_part( 'moduls/modul', 'selections' ); ?>
			</section>
			
			<section class="page-section p-80-cont bg-gray90">
					<?php get_template_part( 'moduls/modul', 'brand' ); ?>
			</section>
			
            <?php get_template_part( 'moduls/modul', 'quotesslider' ); ?>
			
			<section id="contact-link" class="page-section p-100-cont bg-gray10">
                <?php get_template_part( 'moduls/modul', 'contactlink' ); ?>
            </section> 

            <!-- BACK TO TOP -->
				<p id="back-top">
					<a href="#top" title="Back to Top"><span class="icon icon-arrows-up"></span></a>
				</p>
            </div><!-- End BG -->	
		</div>
            
<?php get_footer(); ?>
