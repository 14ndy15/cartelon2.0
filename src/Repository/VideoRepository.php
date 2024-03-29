<?php

namespace App\Repository;

use App\Entity\Video;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry as RegistryInterface;

/**
 * @method Video|null find($id, $lockMode = null, $lockVersion = null)
 * @method Video|null findOneBy(array $criteria, array $orderBy = null)
 * @method Video[]    findAll()
 * @method Video[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VideoRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Video::class);
    }

    /**
     * @return Video[] Returns an array of Video objects
     */
    public function orderedByDate($amount)
    {
        return $this->createQueryBuilder('v')
            ->orderBy('v.pubDate', 'DESC')
            ->orderBy('v.position', 'DESC')
            ->setMaxResults($amount)
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * @return Video[] Returns an array of PosterEvent objects
     */
    public function findByDateFieldPosition($position, $amount)
    {
        return $this->createQueryBuilder('v')
            ->orderBy('v.datetime', 'DESC')
            ->orderBy('v.position', 'DESC')
            ->setMaxResults($amount)
            ->setFirstResult($position)
            ->getQuery()
            ->getResult()
            ;
    }


//    /**
//     * @return Video[] Returns an array of Video objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Video
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
